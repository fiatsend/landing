import Image from 'next/image';

import { Container } from './ui/Container';

const faqs = [
	[
		{
			question: 'Can I cancel a transaction once it has been sent?',
			answer:
				'Once you have sent a transaction there is a waiting period of 5 mins during which transaction can be cancelled before it’s processed. But once txn is processed it cannot be reversed.',
		},
	],
	[
		{
			question: 'Can I save on Fiatsend?',
			answer:
				'Saving on Fiatsend is a way of improving our liquidity. We rewards you monthly cash back on txn fees and interest on any amount left in your Fiatsend balance.',
		},
	],
	[
		{
			question: 'How do you choose the best rates?',
			answer:
				'We use intelligent algorithms to compare and pick the best exchange rates in the market. Means you get to save more, hence more value for your money.',
		},
	],
];

export function Faqs() {
	return (
		<section
			id="faq"
			aria-labelledby="faq-title"
			className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
		>
			<Image
				className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
				src={'/images/background-faqs.jpg'}
				alt=""
				width={1558}
				height={946}
				unoptimized
			/>
			<Container className="relative">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2
						id="faq-title"
						className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
					>
						Frequently asked questions
					</h2>
					<p className="mt-4 text-lg tracking-tight text-slate-700">
						If you can’t find what you’re looking for, email our support team
						and if you’re lucky someone will get back to you.
					</p>
				</div>
				<ul
					role="list"
					className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
				>
					{faqs.map((column, columnIndex) => (
						<li key={columnIndex}>
							<ul role="list" className="flex flex-col gap-y-8">
								{column.map((faq, faqIndex) => (
									<li key={faqIndex}>
										<h3 className="font-display text-lg leading-7 text-slate-900">
											{faq.question}
										</h3>
										<p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}
