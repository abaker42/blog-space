import { MongoClient } from "mongodb";
const pwd = "WX45HB1BG1UhY0Kr";
const user = "anthony";
async function sendContact(req, res) {
	//ensure request is post method
	if (req.method === "POST") {
		const { email, name, message } = req.body;
		//Throw error if form is invalid
		if (
			!email ||
			!email.includes("@") ||
			!name ||
			name.trim() === "" ||
			!message ||
			message.trim() === ""
		) {
			res.status(400).json({ message: "Form Invalid" });
			return;
		}

		//store form data in DB.
		const receivedMsg = { email, name, message };
		console.log(receivedMsg);
    
		let client;
		try {
			//connect to mongoClient asyncly
			client = await MongoClient.connect(
				`mongodb+srv://${user}:${pwd}@cluster0.usequ.mongodb.net/blog-space?retryWrites=true&w=majority`
			);
            //call .db() to connect your Db can pass db name
			const db = client.db();
            //insert into collection by name
			const result = await db.collection("messages").insertOne(receivedMsg);
		} catch (error) {
            client.close()
			res.status(500).json({ errMsg: "db connection failed" });
			console.log("resErr: " + error);
            return;
		}

		
        client.close()
		res.status(200).json({ message: "SUCCESS" });
	}
}

export default sendContact;
//anthony: WX45HB1BG1UhY0Kr
