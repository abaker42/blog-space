import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import React, { Fragment } from "react";

const DUMMY = [
	{
		title: "Know God",
		image: "jesus-crux.jpg",
		excerpt: "God is my healer. He is my redeemer. He is m...",
		date: "2023-07-03",
		slug: "kamla24",
	},
	{
		title: "Trust God",
		image: "holy-bible.jpg",
		excerpt: "God is trust. He will never leave forsake me in my cold...",
		date: "2023-03-25",
		slug: "kakf3k-sknsg",
	},
	{
		title: "Finding Your Way",
		image: "cross.jpg",
		excerpt: "God is seeking lost souls. He leaves his flock in sear...",
		date: "2023-03-25",
		slug: "kauru-r9rg",
	},
	{
		title: "Studying the Bible",
		image: "study-bible.jpg",
		excerpt: "The holy spirit dwells in you when you are save. It is the...",
		date: "2023-09-17",
		slug: "kaujhjru-r9rjg",
	},
];
function HomePage() {
	return (
		<Fragment>
			<Hero />
			<FeaturedPosts posts={DUMMY} />
		</Fragment>
	);
}

export default HomePage;
