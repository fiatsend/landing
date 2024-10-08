import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from './ui/Navbar';
import { ReactNode } from 'react';
import { Footer } from './ui/Footer';

interface PageMeta {
	title: string;
	description: string;
	cardImage: string;
}

interface Props {
	children: ReactNode;
	meta?: PageMeta;
}

export default function Layout({ children, meta: pageMeta }: Props) {
	const router = useRouter();
	const meta = {
		title: 'FiatSend',
		description:
			'Crossborder aggregator for fiat with best market exchange rates',
		cardImage: '/favicon.ico',
		...pageMeta,
	};

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content="follow, index" />
				<link href="/favicon.ico" rel="shortcut icon" />
				<meta content={meta.description} name="description" />
				<meta
					property="og:url"
					content={`https://fiatsend.com${router.asPath}`}
				/>
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content={meta.title} />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.cardImage} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@fiatsend" />
				<meta name="twitter:title" content={meta.title} />
				<meta name="twitter:description" content={meta.description} />
				<meta name="twitter:image" content={meta.cardImage} />
			</Head>

			<Navbar />
			<main id="skip">{children}</main>
			<Footer />
		</>
	);
}
