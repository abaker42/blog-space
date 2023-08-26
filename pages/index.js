import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/lib/post-utils";
import React, { Fragment } from "react";

function HomePage(props) {
	return (
		<Fragment>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</Fragment>
	);
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
		revalidate: 1800 //30min
	};
}
export default HomePage;
