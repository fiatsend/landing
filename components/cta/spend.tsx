
import { CreditCard } from '../features/creditcard';

export const Spend = () => {

	return (
		<div className="relative overflow-hidden" id="spend">
			<div className="bg-white pt-3 pb-4 sm:pt-4 lg:overflow-hidden lg:pt-0 lg:pb-6">
				<div className="mx-auto max-w-5xl lg:px-8">
					<div className="lg:grid lg:grid-cols-2 lg:gap-8">
						<div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
							<div className="lg:py-24">
								<h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
									<span className="block text-blue-500">Spend With</span>
									<span className="block text-black">Confidence</span>
								</h1>
								<p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
									You can now spend directly in your local currency by setting is as default. This means what you see is what you spend. No more hidden fees!
								</p>
								<div className="mt-10 sm:mt-12">
									<button
										type="button"
										disabled
										className="bg-blue-300 hover:bg-blue-400'block w-full rounded-md py-3 px-4 font-medium text-white shadow  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
									>
										Try out this feature ↗ (Coming Soon)
									</button>

								</div>
							</div>
						</div>
						<CreditCard />

					</div>
				</div>
			</div>
		</div>
	);
};
