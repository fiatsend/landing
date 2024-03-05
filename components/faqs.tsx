import { Container } from './ui/Container';

const faqs = [
	[
		{
			question: 'After a transaction has been sent, can I cancel it?',
			answer:
				"A transaction can be canceled within five minutes of the transaction being sent, after which it will be completed. However, once TXN is processed, it can't be undone.",
		},
	],
	[
		{
			question: 'Does Fiatsend allow me to save?',
			answer:
				"Fiatsend is a better way of utilizing your idle funds. You can choose to leave it on your balance in order to receive cash back as interest, or you can increase our liquidity and earn yields.",
		},
	],
	[
		{
			question: 'How do you pick the finest prices?',
			answer:
				'We compare and select the best exchange rates available on the market using sophisticated algorithms. implies greater value for your money since you will be able to save more.',
		},
	],
];

export function Faqs() {
	return (
		<section
			id="faq"
			aria-labelledby="faq-title"
			className="relative overflow-hidden bg-slate-100 py-20 sm:py-32"
		>

			<Container className="relative">
				<div className="mx-auto max-w-2xl lg:mx-auto">
					<h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:mt-5 sm:text-4xl lg:mt-6 xl:text-5xl">
						Frequently asked questions
					</h2>
					<p className="mt-3 text-lg md:text-xl">
						Send an email to our support team if you can't find what you're searching for, and perhaps someone will respond.
					</p>
					{faqs.map((column, columnIndex) => (
						<div className="py-5" key={columnIndex}>

							{column.map((faq, faqIndex) => (
								<details key={faqIndex} className="group">
									<summary className="flex cursor-pointer list-none items-center justify-between font-medium">
										<span>{faq.question}</span>
										<span className="transition group-open:rotate-180">
											<svg fill="none" height="24" shapeRendering="geometricPrecision"
												stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
												strokeWidth="1.5" viewBox="0 0 24 24" width="24">
												<path d="M6 9l6 6 6-6"></path>
											</svg>
										</span>
									</summary>
									<p className="group-open:animate-fadeIn mt-3 text-neutral-600">{faq.answer}
									</p>
								</details>

							))}

						</div>
					))}

				</div>



			</Container>
		</section>
	);
}
