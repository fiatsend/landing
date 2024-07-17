import Exchange from '../features/exchange';

export const Waitlist = () => {




	return (
		<div className="relative overflow-hidden">
			<div className="bg-white pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
				<div className="mx-auto max-w-5xl lg:px-8">
					<div className="lg:grid lg:grid-cols-2 lg:gap-8">
						<div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
							<div className="lg:py-24">
								<h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
									<span className="block text-blue-500">Send money </span>
									<span className="block text-black text-xl">in just one click</span>
								</h1>
								<p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
									Works faster than the speed of light
								</p>
								<div className="mt-10 sm:mt-12">
									<button
										type="button"
										disabled
										className="bg-blue-300 hover:bg-blue-400'block w-full rounded-md py-3 px-4 font-medium text-white shadow  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
									>
										Get Started Now
									</button>
								</div>


							</div>
						</div>
						<Exchange />
					</div>
				</div>
			</div>
		</div>
	);
};
