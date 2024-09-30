import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { Banner } from '../components/cta/banner';
import { Waitlist } from '../components/cta/waitlist';
import Script from 'next/script';
import { HowItWorks } from '../components/cta/how-it-works';
import { SecurityAndTechnology } from '../components/cta/security-and-tech';

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
				<HowItWorks />
				<SecurityAndTechnology />
				<Banner />
				<Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=5a2e7fe3-9ffa-4af4-aeb7-a5ab07cda899" />
			</Fragment>
		);
}