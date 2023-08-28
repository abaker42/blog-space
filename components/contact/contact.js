import React, { useState } from "react";
import styles from "./contact.module.css";
import Notification from "../ui/notification";

//try using context to show notifications
function Contact() {
	//change to useRef
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const [reqStatus, setReqStatus] = useState(); // success, pending, error
	const [errs, setErrs] = useState();

	const sendMsgToBackend = async (event) => {
		event.preventDefault();
		//perform client side validation for control on err msg
		const formData = { email, name, message };
		setReqStatus("pending");
		try {
			await sendData(formData);
		} catch (err) {
			setErrs(err.message);
			setReqStatus("error");
			console.log(err);
		}
		setReqStatus("success");
	};

	let notification;
	if (reqStatus === "pending") {
		notification = {
			status: "pending",
			title: "Sending...",
			message: "On The Way!",
		};
	}

	if (reqStatus === "success") {
		notification = {
			status: "success",
			title: "SUCCESS!",
			message: "Message Sent!",
		};
	}

	if (reqStatus === "error") {
		notification = {
			status: "error",
			title: "ERROR",
			message: errs,
		};
	}

	return (
		<section className={styles.contact}>
			<h1>How can I help?</h1>
			<form className={styles.form} onSubmit={sendMsgToBackend}>
				<div className={styles.controls}>
					<div className={styles.control}>
						<label htmlFor='email'>Your Email</label>
						<input
							type='email'
							id='email'
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className={styles.control}>
						<label htmlFor='name'>Your Name</label>
						<input
							type='text'
							id='name'
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>
				<div className={styles.control}>
					<label htmlFor='message'>Message</label>
					<textarea
						id='message'
						rows='5'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
				</div>
				<div className={styles.actions}>
					<button>Send Message</button>
				</div>
			</form>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
		</section>
	);
}

async function sendData(details) {
	//switch to axios
	const resp = await fetch("/api/contact", {
		method: "POST",
		body: JSON.stringify(details),
		headers: { "Content-Type": "application/json" },
	});

	const data = await resp.json();

	if (!resp.ok) {
		throw new Error(data.message || "Something went wrong");
	}
}
export default Contact;
