import { getDonations } from "@/lib/data/server-data";

import SupporterDonationCard from "./SupporterDonationCard";

type SupportersDonationProps = {
  count?: number;
};

const SupportersDonation: React.FC<SupportersDonationProps> = async ({
  count,
}) => {
  const donations = await getDonations(count);

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

export default SupportersDonation;
