import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

//access absolute path 
const postDir = path.join(process.cwd(), 'media/posts');

export function getPostsFiles() {
	//read data in a syncronus (blocking) way
	//retrieve all files with extension included
	return fs.readdirSync(postDir);
}
export function getPostData(fileName){
	const postSlug = fileName.replace(/\.md$/, ""); //regex to remove file extension
	const filePath = path.join(postDir, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(fileContent);

	const postData = {
		slug: postSlug,
		...data,
		content,
	};

	return postData;
}

export function getAllPosts() {
//read data in a syncronus (blocking) way
const postFiles = getPostsFiles();

//extract meta data from files
const allPosts = postFiles.map((file) => {
    return getPostData(file)
})
//sort data desc order
const sortedPosts = allPosts.sort((a, b)=>{ a.date > b.date ? -1 : 1})

return sortedPosts;
}

export function getFeaturedPosts() {
	const allPosts = getAllPosts();
    const featPosts = allPosts.filter(post=> post.isFeatured)

	return featPosts;
}