import React, { Fragment } from 'react';
import classes from './logo.module.css';
import Image from 'next/image';

function Logo() {
	return (
		<Fragment>
			<div className={classes.logo}>
				<Image
					src='/images/Bakers_Transparent.svg'
					alt=''
					height={225}
					width={225}
				/>
			</div>
		</Fragment>
	);
}

export default Logo;
