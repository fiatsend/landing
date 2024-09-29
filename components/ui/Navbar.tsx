import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { Announcement } from '../announcement';

const navigation = [
	{ name: 'Web Wallet v 0.1.1', href: 'https://wallet.fiatsend.com', newWindow: true, comingSoon: false },
	{ name: 'Docs', href: 'https://docs.fiatsend.com', newWindow: true },
];

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const handleJoinClick = () => {
		const element = document.getElementById('waitlist');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.header
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-800/80 backdrop-blur-md' : 'bg-transparent'
				}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ type: 'spring', stiffness: 300, damping: 30 }}
		>
			<Announcement />
			<nav
				className="flex items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<motion.a
						href="/"
						className="-m-1.5 p-1.5"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<span className="sr-only">Fiatsend</span>
						<img className="h-8 w-auto" src="/images/fiatsend.png" alt="fiatsend logo" />
					</motion.a>
				</div>
				<div className="flex lg:hidden">
					<motion.button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-yellow-50"
						onClick={() => setMobileMenuOpen(true)}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</motion.button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<motion.a
							key={item.name}
							href={item.href}
							className={`text-sm font-semibold leading-6 text-yellow-50 ${item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''
								}`}
							target={item.newWindow ? '_blank' : '_self'}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{item.name}
							{item.comingSoon && <span className="ml-1 text-xs">(Coming Soon)</span>}
						</motion.a>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<motion.button
						onClick={handleJoinClick}
						className="flex-none rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-lg hover:shadow-xl transition-all duration-300"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Join Waitlist
					</motion.button>
				</div>
			</nav>
			<AnimatePresence>
				{mobileMenuOpen && (
					<Dialog
						as={motion.div}
						className="lg:hidden"
						open={mobileMenuOpen}
						onClose={setMobileMenuOpen}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<div className="fixed inset-0 z-50" />
						<Dialog.Panel
							as={motion.div}
							className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-zinc-800 text-yellow-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10"
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'spring', stiffness: 300, damping: 30 }}
						>
							<div className="flex items-center justify-between">
								<a href="/" className="-m-1.5 p-1.5">
									<span className="sr-only">Fiatsend</span>
									<img className="h-8 w-auto" src="/images/fiatsend.png" alt="" />
								</a>
								<motion.button
									type="button"
									className="-m-2.5 rounded-md p-2.5 text-yellow-50"
									onClick={() => setMobileMenuOpen(false)}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
								>
									<span className="sr-only">Close menu</span>
									<XMarkIcon className="h-6 w-6" aria-hidden="true" />
								</motion.button>
							</div>
							<div className="mt-6 flow-root">
								<div className="-my-6 divide-y divide-zinc-500/10">
									<div className="space-y-2 py-6">
										{navigation.map((item) => (
											<motion.a
												key={item.name}
												href={item.href}
												className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-yellow-50 hover:bg-zinc-700 ${item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''
													}`}
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
											>
												{item.name}
												{item.comingSoon && <span className="ml-1 text-xs">(Coming Soon)</span>}
											</motion.a>
										))}
									</div>
									<div className="py-6">
										<motion.a
											href="#waitlist"
											className="flex-none rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-lg hover:shadow-xl transition-all duration-300"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											Join Waitlist
										</motion.a>
									</div>
								</div>
							</div>
						</Dialog.Panel>
					</Dialog>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default Navbar;
