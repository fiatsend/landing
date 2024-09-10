export const Banner = () => {
	return (
		<div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
				<div className="relative isolate overflow-hidden bg-white/10 backdrop-blur-lg px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
					<div className="absolute inset-0 -z-10 animate-pulse">
						<svg className="h-full w-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
							<defs>
								<linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" stopColor="#7775D6" stopOpacity="0.5" />
									<stop offset="100%" stopColor="#E935C1" stopOpacity="0.5" />
								</linearGradient>
							</defs>
							<path d="M0,0 L1000,0 L1000,1000 L0,1000 Z" fill="url(#grad)">
								<animate attributeName="d" dur="20s" repeatCount="indefinite"
									values="M0,0 L1000,0 L1000,1000 L0,1000 Z;
											M100,100 L900,50 L950,900 L50,950 Z;
											M0,0 L1000,0 L1000,1000 L0,1000 Z" />
							</path>
						</svg>
					</div>
					<div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
						<h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
							Lightning-Fast Money Transfers
							<br />
							<span className="text-yellow-300">In Just 5 Minutes</span>
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-200">
							Experience the future of finance with our revolutionary offline transaction processing. Need OTC sales? We've got you covered!
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
							<a
								className="group relative inline-flex items-center overflow-hidden rounded-full border-2 border-white px-8 py-3 text-white focus:outline-none focus:ring"
								href={`https://wa.me/+447588511537?text=I am interested in OTC sales`}
							>
								<span className="absolute inset-y-0 left-0 w-[2px] bg-white transition-all group-hover:w-full"></span>
								<span className="relative flex items-center gap-2 text-sm font-bold transition-colors group-hover:text-indigo-600">
									<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
									</svg>
									Chat on WhatsApp
								</span>
							</a>
						</div>
					</div>
					<div className="relative mt-16 h-80 lg:mt-8">
						<img
							className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
							src="/money-transfer.webp"
							alt="Fast money transfer illustration"
							width="1824"
							height="1080"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
