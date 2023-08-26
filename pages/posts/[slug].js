import PostContent from '@/components/posts/post-content';
import { getPostData, getPostsFiles } from '@/lib/post-utils';
import React from 'react';

function SinglePostPage(props) {
	return <div>
		<PostContent post={props.post} />
	</div>
}
//whenever you get data you use
//getStaticProps or GetServerSideProps
export function getStaticProps(context){
	//grab info from url like id or slug
	const {params} = context;
	const {slug} = params;

	//pass info in api call
	const postData = getPostData(slug);

	//return info as props Obj
	return {
		props: {
			post: postData
		},
		revalidate: 600 //10 min
	}
}
//since this is a dynamic page getstaticProps can work by itsel
//if page were static we'd be good but for dynamic pages
//we need getStaticPaths to let next know which slug value
//to pregenerate.
export function getStaticPaths(){
	//all file with extension attached
	const allFileNames = getPostsFiles()

	const slugs = allFileNames.map((fileName) => fileName.replace(/\.md$/, ''));
	return {
		//slugs you would want to preload
		//goes in array (ie popular posts)
		paths: slugs.map(slu =>({params: {slug: slu}})),
		fallback: false
		//true load with fallback content
		//'blocking' wait till data loads
	}
}


export default SinglePostPage;
