import Contact from '@/components/contact/contact';
import Head from 'next/head';
import React, { Fragment } from 'react';

function ContactPage() {
	return <Fragment>
		<Head>
			<title>Contact Owner Form</title>
			<meta name='description' content='Contact Blake' />
		</Head>
		<Contact />;
		</Fragment>
}

export default ContactPage;
