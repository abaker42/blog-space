import Image from "next/image";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

/**
 * This apps content uses mark down I installed
 * using 'npm i react-markdown' most blogs
 * wouldn't need markdown but it could be useful
 * in technical blogs with code snippets
 */
//{`public/images/${image.src}`}

function PostContent(props) {
	const { post } = props;
	const imagePath = `/images/posts/${post.image}`;

	return (
		<article className={classes.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown
				components={{
					img: nextImage,
					code: ({ ...props }) => (
						<Prism
							style={tomorrow}
							language={props.language}
							children={props.value}
						>
							{props.children}
						</Prism>
					),
				}}
			>
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
