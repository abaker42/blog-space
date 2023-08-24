import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const DUMMYPOST = {
	title: "Studying the Bible",
	image: "study-bible.jpg",
	date: "2023-09-17",
	slug: "kaujhjru-r9rjg",
	content: `# The holy spirit dwells 
    in you when you are save. It is the...,`
};
/**
 * This apps content uses mark down I installed
 * using 'npm i react-markdown' most blogs 
 * wouldn't need markdown but it could be useful
 * in technical blogs with code snippets
 */

function PostContent() {
    const imagePath = `/images/posts/${DUMMYPOST.image}`
	return (
		<article className={classes.content}>
			<PostHeader title={DUMMYPOST.title} image={imagePath} />
			<ReactMarkdown>
                {DUMMYPOST.content}
            </ReactMarkdown>
		</article>
	);
}

export default PostContent;
