import React, { Fragment } from 'react';
import Logo from './logo';
import Link from 'next/link';
import classes from './main-navigation.module.css';

function MainNavigation() {
	return (
		<Fragment>
			<header className={classes.header}>
				<Link href='/'>
					<Logo />
				</Link>
				<nav>
					<ul>
						<li>
							<Link href='/posts'>Posts</Link>
						</li>
						<li>
							<Link href='/contact'>Contact</Link>
						</li>
					</ul>
				</nav>
			</header>
		</Fragment>
	);
}

export default MainNavigation;