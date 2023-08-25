import AllPosts from '@/components/posts/all-posts';
import { getAllPosts, getFeaturedPosts } from '@/lib/post-utils';
import React from 'react';

// const allDUMMY = [
// 	{
// 		title: "Know God",
// 		image: "jesus-crux.jpg",
// 		excerpt: "God is my healer. He is my redeemer. He is m...",
// 		date: "2023-07-03",
// 		slug: "kamla24",
// 	},
// 	{
// 		title: "Trust God",
// 		image: "holy-bible.jpg",
// 		excerpt: "God is trust. He will never leave forsake me in my cold...",
// 		date: "2023-03-25",
// 		slug: "kakf3k-sknsg",
// 	},
// 	{
// 		title: "Finding Your Way",
// 		image: "cross.jpg",
// 		excerpt: "God is seeking lost souls. He leaves his flock in sear...",
// 		date: "2023-03-25",
// 		slug: "kau35ru-r9snrg",
// 	},
// 	{
// 		title: "Studying the Bible",
// 		image: "study-bible.jpg",
// 		excerpt: "The holy spirit dwells in you when you are save. It is the...",
// 		date: "2023-09-17",
// 		slug: "kauru-r9rg",
// 	},
// 	{
// 		title: "Receving Power",
// 		image: "cross.jpg",
// 		excerpt: "God is seeking lost souls. He leaves his flock in sear...",
// 		date: "2023-03-25",
// 		slug: "kau422ru-rh9rg",
// 	},
// 	{
// 		title: "Being Blessed",
// 		image: "study-bible.jpg",
// 		excerpt: "The holy spirit dwells in you when you are save. It is the...",
// 		date: "2023-09-17",
// 		slug: "kaurdafu-r49rg",
// 	},
// ];
function AllPostsPage(props) {
	return (
		<div>
			<AllPosts posts={props.posts} />
		</div>
	);
}

export function getServerSideProps(){
	const myPosts = getAllPosts();
	
	return {
		props: {
			posts: myPosts,
		}
	};
}
export default AllPostsPage;
