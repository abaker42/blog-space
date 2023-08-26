import AllPosts from '@/components/posts/all-posts';
import { getAllPosts } from '@/lib/post-utils';
import React from 'react';

function AllPostsPage(props) {
	return (
		<div>
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
