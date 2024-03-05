import { ChangeEvent, FormEvent, useState } from 'react';
import { SuccessToast } from '../toast/success';
import { ErrorToast } from '../toast/error';

export const Footer = () => {
	const [email, setEmail] = useState('');
	const [toast, setToast] = useState('');
	const [loading, setLoading] = useState(false);
	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!email) {
			return;
		}
		try {
			setLoading(true);
			const res = await fetch('/api/subscribe', {
				method: 'POST',
				body: JSON.stringify({ email: email }),
			});
			const data = await res.json();
			if (data.success) {
				setToast('success');
				setTimeout(() => {
					setToast('');
				}, 5000);
			} else {
				throw new Error(
					data?.error || 'Something went wrong, please try again later'
				);
			}
		} catch (e) {
			setToast('error');
			setTimeout(() => {
				setToast('');
			}, 5000);
		}
		setLoading(false);
	};
	return (
		<footer className="bg-white flex flex-col justify-center">
			<div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
				<nav
					className="-mx-5 -my-2 flex flex-wrap justify-center"
					aria-label="Footer"
				>
					{/* <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-500 hover:text-gray-900">
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-500 hover:text-gray-900">
              Company
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-500 hover:text-gray-900">
              Privacy
            </a>
          </div> */}
				</nav>
				<div id="waitlist">
					<h1 className="mt-4 flex gap-1 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
						<span className="block text-blue-500 text-lg">We&apos;re </span>
						<span className="block text-black text-lg">lauching our beta in Q1</span>
					</h1>
					<p className="text-base text-gray-400 sm:text-xl lg:text-lg xl:text-xl">
						Be the first to try out our new features
					</p>
					<div className="mt-4 sm:mt-6">
						<form
							onSubmit={handleFormSubmit}
							className="sm:mx-auto sm:max-w-xl lg:mx-0"
						>
							<div className="sm:flex">
								<input
									type="hidden"
									name="access_key"
									value="YOUR_ACCESS_KEy_HERE"
								/>
								<input
									type="hidden"
									name="subject"
									value="New Waitlist"
								/>
								<div className="min-w-0 flex-1">
									<label htmlFor="email" className="sr-only">
										Email address
									</label>
									<input
										id="email"
										type="email"
										placeholder="Enter your email"
										className="block w-full rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
										value={email}
										onChange={(e: ChangeEvent<HTMLInputElement>) =>
											setEmail(e.target.value)
										}
										autoComplete="on"
									/>
								</div>
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<button
										type="submit"
										disabled={loading || !email}
										className={`${loading
											? 'bg-green-500 hover:bg-green-200'
											: 'bg-blue-500 hover:bg-blue-400'
											} block w-full rounded-md py-3 px-4 font-medium text-white shadow  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900`}
									>
										Join Waitlist
									</button>
								</div>
							</div>
							{toast === 'success' && <SuccessToast />}
							{toast === 'error' && <ErrorToast />}
						</form>
					</div>
				</div>
				<div className="mt-8 flex justify-center space-x-6">
					<a
						href="https://twitter.com/fiatsend"
						className="text-gray-400 hover:text-gray-500"
						target="_blank"
						rel="noreferrer"
					>
						<span className="sr-only">Twitter</span>
						<svg
							fill="currentColor"
							viewBox="0 0 24 24"
							className="h-6 w-6"
							aria-hidden="true"
						>
							<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
						</svg>
					</a>
					{/* <a
						href="https://instagram.com/fiatsend"
						className="text-gray-400 hover:text-gray-500"
						target="_blank"
						rel="noreferrer"
					>
						<span className="sr-only">Instagram</span>
						<svg
							fill="currentColor"
							viewBox="0 0 24 24"
							className="h-6 w-6"
							aria-hidden="true"
						>
							<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
						</svg>
					</a> */}

					<a
						href="https://github.com/fiatsend"
						className="text-gray-400 hover:text-gray-500"
						target="_blank"
						rel="noreferrer"
					>
						<span className="sr-only">GitHub</span>
						<svg
							fill="currentColor"
							viewBox="0 0 24 24"
							className="h-6 w-6"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								clipRule="evenodd"
							></path>
						</svg>
					</a>
				</div>
				<p className="mt-8 text-center text-base text-gray-400">
					© 2024 Fiatsend. All rights reserved.
				</p>
			</div>
		</footer>
	);
};
