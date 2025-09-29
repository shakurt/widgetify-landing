import type { Donation } from '../services/donationService'
import { useDonations } from '../services/hooks/useDonations'

const formatDate = (timestamp: number) => {
	return new Date(timestamp * 1000).toLocaleDateString('fa-IR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}

const formatAmount = (amount: number) => {
	return new Intl.NumberFormat('fa-IR').format(amount)
}

export default function DonationCards() {
	const { data: donations = [], error } = useDonations()

	if (error) {
		console.error('Failed to fetch donations:', error)
	}

	return (
		<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{donations.map((donation: Donation, index) => (
				<div
					key={donation.name || index}
					className="relative overflow-hidden transition-all duration-300 transform bg-white border border-gray-100 shadow-lg rounded-2xl group hover:-translate-y-1"
					style={{ animationDelay: `${index * 100}ms` }}
				>
					<div className="absolute w-6 h-6 transform -translate-y-1/2 rounded-full top-1/2 -left-3 bg-blue-50"></div>
					<div className="absolute w-6 h-6 transform -translate-y-1/2 rounded-full top-1/2 -right-3 bg-blue-50"></div>

					<div className="p-4">
						<div className="flex items-center justify-between mb-4">
							<h3 className="text-lg font-bold text-gray-800">
								{donation.name || 'حامی ناشناس'}
							</h3>
						</div>

						<div className="my-4 border-t-2 border-gray-200 border-dashed"></div>

						<div className="mb-4 text-center">
							<p className="mb-1 text-sm text-gray-500">مبلغ حمایت</p>
							<p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
								{formatAmount(donation.toman_amount)}
								<span className="mr-1 text-xl">تومان</span>
							</p>
						</div>

						{donation.description && (
							<div className="p-3 mb-4 text-center border border-gray-100 rounded-lg bg-gray-50">
								<p className="text-sm italic text-gray-600">
									"{donation.description}"
								</p>
							</div>
						)}

						{/* Footer */}
						<div className="flex items-center justify-between text-sm text-gray-500">
							<div className="flex items-center gap-1">
								📅<span>{formatDate(donation.time)}</span>
							</div>
							<div className="flex items-center gap-1 text-blue-500">
								💙<span>متشکریم!</span>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
