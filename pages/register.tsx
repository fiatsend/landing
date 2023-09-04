import { getURL } from '../utils/helpers';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Register() {
	const supabaseClient = useSupabaseClient();
	const router = useRouter();
	const user = useUser();

	useEffect(() => {
		if (user) {
			router.replace('/account');
		}
	}, [user, router]);

	return (
		<div className="container">
			<Auth
				supabaseClient={supabaseClient}
				redirectTo={getURL()}
				magicLink={true}
				appearance={{
					theme: ThemeSupa,
					variables: {
						default: {
							colors: {
								brand: '#404040',
								brandAccent: '#52525b',
							},
						},
					},
				}}
				theme="dark"
			/>
		</div>
	);
}
export default Register;
