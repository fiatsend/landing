import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { Banner } from '../components/cta/banner';
import { Faqs } from '../components/faqs';
import { Testimonials } from '../components/testimonials';
import { Waitlist } from '../components/cta/waitlist';

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
				{/* <Exchange /> */}
				<Waitlist />
				<Testimonials />
				<Banner />
				<Faqs />
			</Fragment>
		);
}
