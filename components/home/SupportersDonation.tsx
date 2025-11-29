import type { Donation } from "@/app/lib/data";
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
    <section className="space-y-6">
      <div
        className={
          "grid auto-rows-min grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }
      >
        {donations.map((donation, index) => (
          <SupporterDonationCard
            key={donation.name}
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
    </section>
  );
};

export default SupportersDonation;
