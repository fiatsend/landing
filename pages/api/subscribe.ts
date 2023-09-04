// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	error?: string;
	success?: boolean;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { email } = JSON.parse(req.body);
	if (!email) {
		res.status(401).json({ error: 'Email is required' });
		return;
	}

	const mcData = {
		members: [
			{
				email_address: email,
				status: 'pending',
			},
		],
	};

	try {
		const mcDataPost = JSON.stringify(mcData);
		const audienceId = process.env.MAILCHIMP_AUDIENCE_ID as string;
		const URL = `https://us6.api.mailchimp.com/3.0/lists/${audienceId}`;
		const options = {
			method: 'POST',
			headers: {
				Authorization: `auth ${process.env.MAILCHIMP_API_KEY as string}`,
			},
			body: mcDataPost,
		};
		const response = await fetch(URL, options);

		const data = await response.json();

		if (data.errors[0]?.error) {
			return res.json({ error: data.errors[0].error });
		} else {
			res.status(200).json({ success: true });
		}
	} catch (e) {
		res
			.status(401)
			.json({ error: 'Something went wrong, please try again later.' });
	}
}
