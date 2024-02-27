

export default function Exchange() {
	return (
		<div className="p-10">
			<div className="mockup-phone border-blue-100">
				<div className="camera"></div>
				<div className="display">
					<div className="artboard artboard-demo phone-1 bg-blue-100">
						<div
							className={`flex flex-col items-center shadow-secondary border-secondary rounded-xl w-full md:w-5/6`}
						>
							<div className="form-control w-full">
								<select className="select select-success w-full max-w-xs">
									<option disabled selected>
										Choose Currency
									</option>
									<option>EUR</option>
									<option>GBP</option>
									<option>USD</option>
								</select>
								<div className="tabs pt-2">
									<a className={`tab tab-lifted bg-green-300`}>Send EUR</a>
									<a className={`tab tab-lifted bg-red-300`}>Receive EUR</a>
								</div>
								<label className="label">
									<span className="label-text">Enter amount</span>
									<span className="label-text-alt">
										<b>GHS</b>
									</span>
								</label>
								<div className="relative">
									<input
										type="number"

										placeholder="1.0"
										// onChange={(e: React.ChangeEvent<InputEvent>) => {
										//   setAmount(e.target.value);
										// }}
										className="input input-bordered w-full rounded-box"
									/>
									<div className="absolute inset-y-0 right-0 flex items-center z-20 pr-4">
										{/* <button className="btn btn-primary btn-sm ml-4">MAX</button> */}
									</div>
								</div>

								<label className="label">
									<span className="label-text-alt">You will get</span>
									<span className="label-text-alt">
										<b>EUR</b>
									</span>
									{/* <span>& earn approx {eatimatedEarnings}</span> */}
								</label>
								<input
									type="number"

									placeholder="1.0"
									// onChange={(e: React.ChangeEvent<InputEvent>) => {
									//   setAmount(e.target.value);
									// }}
									className="input input-bordered bg-gray-100 w-full rounded-box"
								/>
							</div>

							<div className="divider"></div>
							<div className="grid card bg-white rounded-box w-full p-3">
								<div className="flex gap-12 justify-between">
									<h3 className="label-text-alt">Exchange Rate:</h3>
									<h3 className="label-text-alt">13.43</h3>
								</div>

								<div className="flex justify-between">
									<h4 className="label-text-alt">Transaction Cost:</h4>
									<h3 className="label-text-alt">Free</h3>
								</div>
							</div>
							<div className="grid card bg-gray-100 w-full rounded-box p-4 m-4">
								<div className="flex justify-between my-2">
									<div className="flex gap-2 items-center">
										<h3 className="label-text-alt">Limit</h3>
										<div
											className="tooltip label-text-alt"
											data-tip="The maximum amount your can send"
										>
											<svg
												stroke="currentColor"
												fill="currentColor"
												stroke-width="0"
												viewBox="0 0 1024 1024"
												height="1em"
												width="1em"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
												<path d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
											</svg>
										</div>
									</div>
									<div className="flex">
										<h3 className="label-text-alt">0.00</h3>
										<h3 className="label-text-alt">/</h3>
										<h3 className="label-text-alt">5000 GHS</h3>
									</div>
								</div>
								<progress className="progress progress-primary w-full"></progress>
							</div>

							<button className="bg-blue-500 hover:bg-blue-400 block w-full rounded-md py-3 px-4 font-medium text-white shadow  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900">Exchange</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
