import type { Donation } from '../services/donationService'
import { useDonations } from '../services/hooks/useDonations'

const formatDate = (timestamp: number) =>
	new Date(timestamp * 1000).toLocaleDateString('fa-IR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})

const formatAmount = (amount: number) => new Intl.NumberFormat('fa-IR').format(amount)

const getCurrencySymbol = (currency: string) => {
	switch (currency.toUpperCase()) {
		case 'USD':
			return '$'
		case 'EUR':
			return '€'
		case 'GBP':
			return '£'
		case 'TOMAN':
		case 'IRR':
			return 'تومان'
		default:
			return currency
	}
}

const getInitials = (name?: string | null) => {
	if (!name) return '؟'
	const parts = name.trim().split(/\s+/)
	if (!parts.length) return '؟'
	return parts
		.slice(0, 2)
		.map((part) => part[0])
		.join('')
		.toUpperCase()
}

const accentBands = [
	'bg-neutral-900',
	'bg-neutral-800',
	'bg-neutral-700',
	'bg-neutral-600',
]

const donationBadges = [
	{
		threshold: 100_000,
		label: 'حامی نوپا',
		emoji: '🌱',
		className: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
	},
	{
		threshold: 500_000,
		label: 'حامی پرشور',
		emoji: '🔥',
		className: 'bg-orange-50 text-orange-700 border border-orange-200',
	},
	{
		threshold: 1_000_000,
		label: 'حامی الماس',
		emoji: '💎',
		className: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
	},
	{
		threshold: 5_000_000,
		label: 'حامی طلایی',
		emoji: '⭐',
		className: 'bg-amber-50 text-amber-800 border border-amber-300',
	},
	{
		threshold: 10_000_000,
		label: 'حامی پلاتینیوم',
		emoji: '🏅',
		className: 'bg-slate-100 text-slate-800 border border-slate-300',
	},
]

const getDonationBadge = (amount: number) => {
	for (let index = donationBadges.length - 1; index >= 0; index -= 1) {
		const badge = donationBadges[index]
		if (amount >= badge.threshold) return badge
	}
	return null
}

type DonationCardsLayout = 'standard' | 'gallery'

interface Prop {
	count: number | null
	layout?: DonationCardsLayout
}

export default function DonationCards({ count }: Prop) {
	const { data } = useDonations()
	let donations = data || []
	if (count) donations = donations.slice(0, count)

	return (
		<section className="space-y-6" dir="rtl">
			<div
				className={
					'grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-min'
				}
			>
				{donations.map((donation: Donation, index) => {
					const accent = accentBands[index % accentBands.length]
					const badge = getDonationBadge(donation.amount)

					const cardClassName = ` group relative flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white/75 p-3 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.4)]`
					return (
						<article key={donation.name || index} className={cardClassName}>
							<div className="flex items-start justify-between gap-2">
								<div className="flex items-center gap-2">
									{donation.avatar ? (
										<span className="relative inline-flex w-8 h-8 overflow-hidden border rounded-lg shadow-sm border-neutral-200">
											<img
												src={donation.avatar}
												alt={
													donation.name
														? `آواتار ${donation.name}`
														: 'آواتار حامی'
												}
												className="object-cover w-full h-full"
												onError={(event) => {
													;(
														event.target as HTMLImageElement
													).style.display = 'none'
												}}
											/>
										</span>
									) : (
										<span
											className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold tracking-tight text-white ${accent}`}
										>
											{getInitials(donation.name)}
										</span>
									)}
									<div className="flex flex-col">
										<span className="text-sm font-semibold text-neutral-900">
											{donation.name || 'حامی ناشناس'}
										</span>
										<span className="text-xs text-neutral-500">
											{formatDate(donation.time)}
										</span>
									</div>
								</div>
								{badge && (
									<span
										className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${badge.className}`}
										dir="auto"
									>
										<span className="text-base leading-none">
											{badge.emoji}
										</span>
										{badge.label}
									</span>
								)}
							</div>

							<div className="mt-2">
								<p className="text-xs font-medium text-neutral-500">
									مبلغ حمایت
								</p>
								<div className="flex items-baseline gap-1 mt-1 text-neutral-900">
									<span className="text-2xl font-semibold">
										{formatAmount(donation.amount)}
									</span>
									<span
										className="text-xs font-medium text-neutral-500"
										dir="auto"
									>
										{getCurrencySymbol(donation.currency)}
									</span>
								</div>
							</div>

							<div className="mt-2 min-h-20 max-h-20 overflow-y-auto bg-neutral-100 rounded-2xl p-1.5 font-light">
								{donation.description ? (
									<p
										className="overflow-hidden text-xs  leading-tight text-neutral-600 [display:-webkit-box]   "
										style={{
											WebkitLineClamp: 5,
											WebkitBoxOrient: 'vertical',
										}}
									>
										{donation.description}
									</p>
								) : (
									<p className="text-sm text-neutral-400">
										این حامی پیامی ثبت نکرده است.
									</p>
								)}
							</div>

							<div className="w-full h-px mt-2 bg-neutral-200/70"></div>
							<footer className="mt-1 text-xs font-bold text-gray-500">
								سپاس از همراهی شما با ویجتیفای 💙
							</footer>
						</article>
					)
				})}
			</div>
		</section>
	)
}
