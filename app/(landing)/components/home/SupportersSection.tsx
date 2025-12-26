import SupporterDonationList from "@landing/components/home/SupporterDonationList";
import { LuGift } from "react-icons/lu";

import LinkButton from "@/components/ui/LinkButton";

const SupportersSection = () => {
  return (
    <section className="my-10 mt-16 flex flex-col gap-2">
      <h2 className="mb-3 text-center text-2xl leading-tight font-bold tracking-tight text-gray-900 md:mb-4 md:text-3xl lg:text-4xl">
        حمایت کنندگان 💙
      </h2>
      <p className="animate-fade-in-up mx-auto max-w-3xl text-center text-sm leading-relaxed font-light text-gray-600 md:text-base md:leading-relaxed lg:text-lg">
        از تمامی حامیان و کاربرانی که به توسعه ویجتیفای کمک کرده‌اند، سپاسگزاریم
      </p>

      <SupporterDonationList count={8} />

      <LinkButton
        icon={LuGift}
        text="حمایت کنید"
        href="/donation"
        className="mx-auto mt-6"
      />
    </section>
  );
};

export default SupportersSection;
