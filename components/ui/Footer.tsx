import { ChangeEvent, FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { SuccessToast } from '../toast/success';
import { ErrorToast } from '../toast/error';

export const Footer = () => {
	const [email, setEmail] = useState('');
	const [toast, setToast] = useState('');
	const [loading, setLoading] = useState(false);

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!email) return;

		try {
			setLoading(true);
			const res = await fetch('/api/subscribe', {
				method: 'POST',
				body: JSON.stringify({ email }),
			});
			const data = await res.json();
			if (data.success) {
				setToast('success');
				setTimeout(() => setToast(''), 5000);
			} else {
				throw new Error(data?.error || 'Something went wrong, please try again later');
			}
		} catch (e) {
			setToast('error');
			setTimeout(() => setToast(''), 5000);
		}
		setLoading(false);
	};

	return (
		<footer className="bg-gradient-to-b from-zinc-800 to-zinc-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<div>
						<motion.h2
							className="text-3xl font-bold mb-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							Join Our Beta Launch
						</motion.h2>
						<motion.p
							className="text-zinc-300 mb-6"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							Be among the first to experience our revolutionary features. Sign up now!
						</motion.p>
						<form onSubmit={handleFormSubmit} className="space-y-4">
							<div className="flex flex-col sm:flex-row gap-4">
								<input
									type="email"
									placeholder="Enter your email"
									className="flex-grow px-4 py-2 rounded-md bg-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
									value={email}
									onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
									required
								/>
								<motion.button
									type="submit"
									disabled={loading || !email}
									className={`px-6 py-2 rounded-md font-semibold ${loading ? 'bg-yellow-600' : 'bg-yellow-500 hover:bg-yellow-600'
										} text-zinc-900 transition-colors duration-300`}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									{loading ? 'Joining...' : 'Join Waitlist'}
								</motion.button>
							</div>
							<AnimatePresence>
								{toast === 'success' && <SuccessToast />}
								{toast === 'error' && <ErrorToast />}
							</AnimatePresence>
						</form>
					</div>
					<div className="text-center md:text-right">
						<img src="/images/fiatsend.png" alt="Fiatsend Logo" className="w-32 h-auto mx-auto md:ml-auto md:mr-0 mb-4" />
						<div className="flex justify-center md:justify-end space-x-4">
							<motion.a
								href="https://twitter.com/fiatsend"
								target="_blank"
								rel="noreferrer"
								className="text-zinc-400 hover:text-yellow-500 transition-colors duration-300"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<FaTwitter size={24} />
							</motion.a>
							<motion.a
								href="https://github.com/fiatsend"
								target="_blank"
								rel="noreferrer"
								className="text-zinc-400 hover:text-yellow-500 transition-colors duration-300"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<FaGithub size={24} />
							</motion.a>
						</div>
					</div>
				</div>
				<div className="mt-8 pt-8 border-t border-zinc-700 text-center">
					<p className="text-zinc-400">
						© {new Date().getFullYear()} Fiatsend. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
