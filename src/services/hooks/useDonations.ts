import { useQuery } from '@tanstack/react-query'
import { type Donation, donationService } from '../donationService'

export const useDonations = () => {
	return useQuery({
		queryKey: ['donations', 'top'],
		queryFn: donationService.getTopDonations,
		staleTime: 5 * 60 * 1000, // 5 minutes
		gcTime: 10 * 60 * 1000, // 10 minutes (gcTime replaces cacheTime in v5)
		retry: 3,
		select: (data) => data?.donates || ([] as Donation[]),
	})
}
