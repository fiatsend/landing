import Link from "next/link"
import { Fragment } from "react"
import { FaGithub, FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion';

export const Waitlist = () => {
	const handleJoinClick = () => {
		const element = document.getElementById('waitlist');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<Fragment>
			<div className="flex flex-col gap-8 pb-8 md:gap-16 md:pb-16 xl:pb-24 bg-gradient-to-br from-zinc-800 to-zinc-900">
				<div className="flex flex-col items-center justify-center max-w-4xl px-8 mx-auto mt-8 sm:min-h-screen sm:mt-0 sm:px-0">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center">
						<Link
							href="https://github.com/fiatsend"
							target="_blank"
							className="text-zinc-300 relative overflow-hidden rounded-full py-2 px-6 text-sm leading-6 ring-1 ring-zinc-100/20 hover:ring-zinc-100/40 duration-300 group flex items-center space-x-2 hover:bg-zinc-700/30"
						>
							<FaGithub className="text-zinc-400 group-hover:text-white duration-300" />
							<span>Fiatsend is Open Source on{" "}
								<span className="font-semibold text-zinc-100">
									GitHub
								</span>
							</span>
						</Link>
					</div>
					<div className="text-center">
						<h1 className="py-6 text-5xl font-bold tracking-tight text-transparent bg-gradient-to-r bg-clip-text from-yellow-300 via-yellow-100 to-yellow-300 sm:text-7xl">
							Revolutionizing the Future of Digital Finance
						</h1>
						<p className="mt-6 text-lg leading-7 text-zinc-300 max-w-2xl mx-auto">
							Experience decentralization and full compliance with fiatsend. Your data remains yours, always. We ensure unencrypted data never leaves your device.
						</p>
						<div className="flex flex-col justify-center gap-6 mx-auto mt-12 sm:flex-row sm:max-w-xl">
							<motion.button
								onClick={handleJoinClick}
								className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-yellow-300"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className="relative px-5 py-3 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
									Join Waitlist
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
		</Fragment>
	)
}
