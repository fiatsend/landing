import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { Banner } from '../components/cta/banner';
import { Faqs } from '../components/faqs';
import { Testimonials } from '../components/testimonials';
import { Waitlist } from '../components/cta/waitlist';
import { Spend } from '../components/cta/spend';
import { TakeControl } from '../components/cta/take-control';
import Script from 'next/script';

export default function Homepage() {
	const router = useRouter();
	const user = useUser();

	useEffect(() => {
		if (user) {
			router.replace('/account');
		}
	}, [user, router]);

	if (!user)
		return (
			<Fragment>
				<Waitlist />
				<TakeControl />
				<Spend />
				<Testimonials />
				<Banner />
				<Faqs />
				<Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=5a2e7fe3-9ffa-4af4-aeb7-a5ab07cda899" />
			</Fragment>
		);
}