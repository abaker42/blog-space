import Image from 'next/image';
import React from 'react';
import classes from './hero.module.css';

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image src='/images/AB_Headshot.jpg' alt='' width={300} height={300} />
			</div>
			<h1>Hi, I'm Mr. Baker</h1>
			<p>I blog about sports and gaming</p>
		</section>
	);
}

export default Hero;
