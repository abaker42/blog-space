import AllPosts from '@/components/posts/all-posts';
import { getAllPosts } from '@/lib/post-utils';
import Head from 'next/head';
import React from 'react';

function AllPostsPage(props) {
	return (
		<div>
			<Head>
				<title>All Blog Posts</title>
				<meta name='description' content='All My Posts' />
			</Head>
			<AllPosts posts={props.posts} />
		</div>
	);
}

export function getStaticProps(){
	const myPosts = getAllPosts();
	
	return {
		props: {
			posts: myPosts,
		}
	};
}
export default AllPostsPage;
