import { getDonations } from "@/app/lib/data";

import SupporterDonationCard from "./SupporterDonationCard";

type DonationCardsLayout = "standard" | "gallery";

interface Prop {
  count?: number;
  layout?: DonationCardsLayout;
}

const SupportersDonation = async ({ count }: Prop) => {
  const donations = await getDonations(count);
  // console.log(donations);

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
            currency={donation.currency}
            description={donation.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SupportersDonation;
