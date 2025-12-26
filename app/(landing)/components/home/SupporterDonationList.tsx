import SupporterDonationCard from "@landing/components/home/SupporterDonationCard";

import { getDonations } from "@/lib/dal";

type SupporterDonationListProps = {
  count?: number;
};

const SupporterDonationList: React.FC<SupporterDonationListProps> = async ({
  count,
}) => {
  const res = await getDonations(count);
  if (res.success === false)
    return (
      <p className="py-4 text-center text-sm text-red-600 md:py-6 md:text-base">
        {res.message}
      </p>
    );

  const donations = res.donates;
  return (
    <div
      className="animate-fade-in-up space-y-6"
      role="feed"
      aria-label="لیست حمایت‌های اخیر"
    >
      <div className="grid auto-rows-min grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {donations.map((donation, index) => (
          <SupporterDonationCard
            key={`${donation.name}-${donation.time}-${index}`}
            index={index}
            name={donation.name}
            avatar={donation.avatar}
            time={donation.time}
            amount={donation.amount}
            toman_amount={donation.toman_amount}
            currency={donation.currency}
            description={donation.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SupporterDonationList;
