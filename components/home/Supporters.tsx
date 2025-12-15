import Link from "next/link";

import { LuGift } from "react-icons/lu";

import SupporterDonations from "./SupportersDonation";

const Supporters = () => {
  return (
    <section className="my-10 mt-16 flex flex-col gap-2">
      <h2 className="mb-3 text-center text-2xl leading-tight font-bold tracking-tight text-gray-900 md:mb-4 md:text-3xl lg:text-4xl">
        حمایت کنندگان 💙
      </h2>
      <p className="animate-fade-in-up mx-auto max-w-3xl text-center text-sm leading-relaxed font-light text-gray-600 md:text-base md:leading-relaxed lg:text-lg">
        از تمامی حامیان و کاربرانی که به توسعه ویجتیفای کمک کرده‌اند، سپاسگزاریم
      </p>

      <SupporterDonations count={8} />

      <div className="mt-6 flex items-center justify-center">
        <Link
          href="/donate"
          className="focus:ring-opacity-50 relative flex items-center rounded-2xl border border-gray-400 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-gray-50 hover:shadow-lg focus:ring-2 focus:ring-blue-300 focus:outline-none md:px-6 md:py-3"
        >
          حمایت کنید
          <LuGift
            size={20}
            className={`mr-0.5 mb-0.5 size-4 transition-transform group-hover:scale-110 md:size-5`}
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
};

export default Supporters;
