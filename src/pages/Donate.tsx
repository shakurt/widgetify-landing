import { ExternalLink, Sparkles } from 'lucide-react'
import ContainerWrapper from '../components/ContainerWrapper'
import DonationCards from '../components/DonationCards'
import { useDocumentTitle } from '../hooks'

export default function Donate() {
	useDocumentTitle('حمایت از ویجتی‌فای')

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute bg-blue-400 rounded-full -top-40 -right-40 w-80 h-80 mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>

				<div className="absolute bg-pink-400 rounded-full top-40 left-1/2 w-80 h-80 mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
			</div>
			<div className="relative py-20 overflow-hidden md:py-32">
				<div className="relative flex flex-col items-center max-w-6xl px-4 mx-auto text-center">
					<h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
							حمایت از ویجتی‌فای
						</span>
					</h1>

					<p className="max-w-3xl mx-auto mb-8 text-xl font-light leading-relaxed text-gray-700 md:text-2xl">
						با حمایت مالی از ویجتی‌فای، به ما کمک کنید تا خدمات بهتری ارائه
						دهیم. تمامی مبالغ دریافتی صرف توسعه و نگهداری پروژه خواهد شد.
					</p>

					<a
						href="http://ref.widgetify.ir/donate"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-8 py-4 text-lg font-medium text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-xl"
					>
						🎁 حمایت کنید
						<ExternalLink className="w-5 h-5 mr-2" />
					</a>
				</div>
			</div>

			<ContainerWrapper>
				<div className="space-y-16">
					{/* Recent Donations Section */}
					<section>
						<div className="mb-8 text-center animate-on-scroll">
							<h2 className="mb-2 text-2xl font-bold text-gray-900">
								آخرین حمایت‌ها
							</h2>
							<p className="max-w-2xl mx-auto font-light text-gray-600">
								حمایت‌های شما به ما انگیزه می‌دهد تا ویجتی‌فای را روز به روز
								بهتر کنیم. با تشکر از اعتماد شما.
							</p>
						</div>

						<DonationCards />
					</section>

					{/* Final CTA Section */}
					<section className="relative">
						<div className="p-12 overflow-hidden text-center text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl">
							<div className="relative">
								<div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-white/20 backdrop-blur-sm">
									<Sparkles className="w-10 h-10 text-white" />
								</div>
								<h2 className="mb-6 text-3xl font-bold">
									همین الان از ویجتی‌فای حمایت کنید
								</h2>
								<p className="max-w-2xl mx-auto mb-8 text-xl text-blue-100">
									با حمایت شما، ویجتی‌فای قدرتمندتر می‌شود و خدمات بهتری
									ارائه می‌دهد
								</p>
								<a
									href="http://ref.widgetify.ir/donate"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center px-8 py-4 font-semibold text-blue-600 transition-all duration-300 bg-white shadow-lg rounded-2xl hover:bg-blue-50 hover:scale-105"
								>
									💙 حمایت مالی
									<ExternalLink className="w-5 h-5 mr-2" />
								</a>
							</div>
						</div>
					</section>
				</div>
			</ContainerWrapper>
		</div>
	)
}
