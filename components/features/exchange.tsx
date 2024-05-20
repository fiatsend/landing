import React, { useState, useEffect, ChangeEvent } from 'react'


export default function Exchange() {
	const headers = new Headers();
	const [rate, setRate] = useState(0)
	const [amount, setAmount] = useState("");
	const [isLoading, setLoading] = useState(true)
	const [currency, setCurrency] = useState("EUR")
	const [equivalentAmount, setEquivalentAmount] = useState(0)


	headers.append("Authorization", `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`);
	useEffect(() => {
		fetch(`https://api.sandbox.transferwise.tech/v1/rates?source=${currency}&target=GHS`, { headers: headers })
			.then((res) => res.json())
			.then((data) => {
				setRate(data[0]?.rate - 0.30)
				setLoading(false)
			})
	}, [currency])

	useEffect(() => {
		setEquivalentAmount((Number(amount) * rate))
	}, [amount])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = parseInt(e.target.value.replace(/[^0-9]/g, ''));
		// Check if the input value is less than or equal to the maximum value
		if (!isNaN(inputValue) && inputValue <= 5000) {
			setAmount(inputValue.toString());
		}
	};


	return (
		<div className="pt-10 mx-auto max-w-md text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0">
			<div className="mockup-phone border-blue-100">
				<div className="camera"></div>
				<div className="display">
					<div className="artboard artboard-demo phone-1 bg-blue-100">
						<div
							className={`flex flex-col items-center shadow-secondary border-secondary rounded-xl w-11/12 md:w-5/6`}
						>
							<div className="form-control w-full">
								<select onChange={(event: ChangeEvent<HTMLSelectElement>) => setCurrency(event.target.value)} className="select select-success w-full mt-4 max-w-xs">
									<option disabled defaultValue={"EUR"} >
										Choose Currency
									</option>
									<option value="EUR">EUR</option>
									<option value="GBP">GBP</option>
									<option value="USD">USD</option>
								</select>
								<div className="tabs pt-2">
									<a className={`tab tab-lifted bg-green-300 rounded-xl`}>Receive GHS</a>
									{/* <a className={`tab tab-lifted bg-red-300`}>Receive EUR</a> */}
								</div>
								<label className="label">
									<span className="label-text">Enter amount</span>
									<span className="label-text-alt">
										<b>{currency}</b>
									</span>
								</label>
								<div className="relative">
									<input	
										value={amount}
										onChange={handleChange}
										className="input w-full rounded-box"
									/>
									<div className="absolute inset-y-0 right-0 flex items-center z-20 pr-4">
										
									</div>
								</div>

								<label className="label">
									<span className="label-text-alt">You will get</span>
									<span className="label-text-alt">
										<b>GHS</b>
									</span>
									{/* <span>& earn approx {eatimatedEarnings}</span> */}
								</label>
								<input disabled
									value={equivalentAmount.toFixed(2)}
									className="input w-full rounded-box"
								/>
							</div>

							<div className="divider"></div>
							<div className="grid card bg-white rounded-box w-full p-3">
								<div className="flex gap-12 justify-between">
									<h3 className="label-text-alt">Exchange Rate:</h3>
									<h3 className="label-text-alt">{rate.toFixed(2)}</h3>
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
												strokeWidth="0"
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
										<h3 className="label-text-alt">5000 {currency}</h3>
									</div>
								</div>
								{isLoading && <progress className="progress w-full"></progress>}
							</div>

							<a className='w-full' aria-label="Chat on WhatsApp" href={`https://wa.me/+233550937111?text=I want to exchange ${amount} ${currency} for ${equivalentAmount.toFixed(2)} cedis`}> <button disabled={isLoading || Number(amount) <= 0} className="bg-none block w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900">{isLoading ? 'Getting Rates' : <img alt="Chat on WhatsApp" className='w-full' src="/WhatsAppButtonGreenLarge.svg" />}</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
