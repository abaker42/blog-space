import Image from "next/image";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

/**
 * This apps content uses mark down I installed
 * using 'npm i react-markdown' most blogs 
 * wouldn't need markdown but it could be useful
 * in technical blogs with code snippets
 */
//{`public/images/${image.src}`}

function PostContent(props) {
	const {post} = props;
    const imagePath = `/images/posts/${post.image}`
	
	return (
		<article className={classes.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown components={{
				img: nextImage,
				code,
			}}>
                {post.content}
            </ReactMarkdown>
		</article>
	);
}

export default PostContent;

const nextImage = (image) => {
	return (
		<Image
			src={`/images/${image.src}`}
			alt={image.alt}
			width={600}
			height={300}
		/>
	);
};
const mdP =(paragraph) => {
	const {node} = paragraph

	if (node.children[0].type === 'image'){
		const image = node.children[0]
		return (
			<div className={classes.image}>
				{nextImage}
			</div>
		)

	}
	return null;
}

const code =(code)=>{
	const {language, value} = code;
	<Prism style={atomDark} language={language} children={value}/>
	
}
