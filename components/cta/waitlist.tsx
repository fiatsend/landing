import Link from "next/link"
import { Fragment } from "react"
import { FaArrowRight, FaRocket, FaLock, FaDollarSign, FaUser } from 'react-icons/fa'
import { motion } from 'framer-motion';

export const Waitlist = () => {
	const handleGetStartedClick = () => {
		const element = document.getElementById('waitlist');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<Fragment>
			{/* Hero Section */}
			<div className="flex flex-col gap-8 pb-8 md:gap-16 md:pb-16 xl:pb-24 bg-gradient-to-br from-indigo-600 to-purple-700 animate-gradient">
				<div className="flex flex-col items-center justify-center max-w-4xl px-8 mx-auto mt-8 sm:min-h-screen sm:mt-0 sm:px-0">
					<div className="text-center">
						<h1 className="py-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
							Experience Seamless Money Transfers Across Africa
						</h1>
						<p className="mt-6 text-lg leading-7 text-gray-200 max-w-2xl mx-auto">
							Decentralized solutions for cross-border transfers. Manage your assets securely with blockchain technology.
						</p>
						<div className="flex flex-col justify-center gap-6 mx-auto mt-12 sm:flex-row sm:max-w-xl">
							<motion.button
								onClick={handleGetStartedClick}
								className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-yellow-300"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className="relative px-5 py-3 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
									Get Started
								</span>
							</motion.button>

							<Link
								href="https://docs.fiatsend.com"
								className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-zinc-900 transition duration-300 ease-out border-2 border-yellow-500 rounded-lg shadow-md group"
							>
								<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
									<FaArrowRight className="text-xl" />
								</span>
								<span className="absolute flex items-center justify-center w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
								<span className="relative invisible">Learn More</span>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Core Features Section */}
			<div className="py-16 bg-gray-50">
				<div className="max-w-6xl mx-auto text-center">
					<h2 className="text-4xl font-bold text-gray-900">Unlock Your Financial Freedom with Fiatsend</h2>
					<p className="mt-4 text-lg text-gray-600">Discover the core features that set us apart.</p>
					<div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
						<div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
							<FaRocket className="h-12 w-12 text-blue-500" />
							<h3 className="mt-4 text-lg font-semibold">Lightning-Fast Transactions</h3>
							<p className="mt-2 text-gray-600">Experience seamless global money transfers without any delays.</p>
						</div>
						<div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
							<FaLock className="h-12 w-12 text-blue-500" />
							<h3 className="mt-4 text-lg font-semibold">Unparalleled Security</h3>
							<p className="mt-2 text-gray-600">Your data is safeguarded using cutting-edge blockchain technology.</p>
						</div>
						<div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
							<FaDollarSign className="h-12 w-12 text-blue-500" />
							<h3 className="mt-4 text-lg font-semibold">Competitive Fees</h3>
							<p className="mt-2 text-gray-600">Benefit from low transfer fees that won't break the bank.</p>
						</div>
						<div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
							<FaUser className="h-12 w-12 text-blue-500" />
							<h3 className="mt-4 text-lg font-semibold">Intuitive User Experience</h3>
							<p className="mt-2 text-gray-600">Designed with user-centricity in mind for effortless financial management.</p>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
