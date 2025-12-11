import Image from "next/image";
import Link from "next/link";

import { FaGithub } from "react-icons/fa6";

import { getContributors } from "@/app/lib/data";
import { GITHUB_LINK } from "@/constants";

import "@/app/styles/contributors.css";

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

const ContributorsSection = async () => {
  const contributors = await getContributors();

  // Filter out contributors without avatar_url or html_url
  const validContributors =
    contributors?.filter((c: Contributor) => c.avatar_url && c.html_url) || [];

  // TODO: Hover on picture to show username and contributions count (install a package?)
  // TODO: Show Sajjad on limit (and the other user)
  return (
    <section className="py-8">
      <div className="mb-8 flex flex-col items-center border-b border-gray-200 pb-6">
        <h2 className="mb-2 text-center text-3xl font-bold">مشارکت‌کنندگان</h2>
        <p className="text-gray-500">
          شما هم میتونید به بهبود ویجتی‌فای کمک کنید
        </p>
      </div>

      {validContributors?.length ? (
        <>
          <div className="mb-8 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
            {validContributors.map(
              (contributor: Contributor, index: number) => (
                <Link
                  key={`${contributor.login}-${index}`}
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="has-hover-persist flex flex-col items-center"
                >
                  <div className="relative mb-3 overflow-hidden rounded-full bg-linear-to-br from-blue-100 to-indigo-100 transition-all duration-500">
                    <Image
                      src={contributor.avatar_url}
                      alt={contributor.login}
                      className="hover-persist-item h-16 w-16 object-cover opacity-70 grayscale filter transition-all ease-in-out"
                      loading="lazy"
                      width={64}
                      height={64}
                    />
                  </div>
                </Link>
              )
            )}
          </div>
          <Link
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-outline btn-outline mx-auto flex w-44 items-center justify-center"
          >
            <FaGithub size={18} className="ml-2" />
            مشارکت در گیت‌هاب
          </Link>
        </>
      ) : (
        <div className="rounded-xl bg-linear-to-br from-blue-50 to-indigo-50 p-10 text-center">
          <p className="mb-1.5 text-lg text-black">
            😅 اوه نه! به نظر می‌رسد که به محدودیت نرخ GitHub رسیده‌ایم.
          </p>
          <p className="mb-2 text-sm text-gray-500">
            لطفاً بعداً دوباره تلاش کنید یا مستقیماً به پروژه در گیت‌هاب سر
            بزنید.
          </p>

          <Link
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-outline btn-outline mx-auto flex w-44 items-center justify-center"
          >
            <FaGithub size={18} className="ml-2" />
            مشارکت در گیت‌هاب
          </Link>
        </div>
      )}
    </section>
  );
};

export default ContributorsSection;
