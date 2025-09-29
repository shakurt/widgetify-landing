import { getMainClient } from './api'

export interface Donation {
	time: number
	amount: number
	currency: string
	toman_amount: number
	name: string
	description: string
}

export interface DonationResponse {
	donates: Donation[]
}

export const donationService = {
	getTopDonations: async (): Promise<DonationResponse> => {
		const client = await getMainClient()
		const response = await client.get('/top-donates')
		return response.data
	},
}
