import Link from "next/link";

import SupporterDonations from "./SupportersDonation";

const Supporters = () => {
  return (
    <section className="my-10 mt-16 flex flex-col gap-2">
      <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
        حمایت کنندگان 💙
      </h2>
      <p className="mx-auto mb-4 max-w-2xl text-center text-lg text-gray-600">
        از تمامی حامیان و کاربرانی که به توسعه ویجتی‌فای کمک کرده‌اند،
        سپاسگزاریم
      </p>

      <SupporterDonations count={12} />

      <div className="self-center">
        <div className="mt-6 flex justify-center">
          <Link
            href="/donate"
            className="flex items-center rounded-2xl border border-gray-400 bg-white px-4 py-2 text-sm text-gray-600 transition-colors hover:border-blue-400 hover:bg-gray-50"
          >
            🎁 حمایت کنید
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Supporters;
