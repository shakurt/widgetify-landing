import ContributorImageLink from "@landing/components/home/ContributorImageLink";
import { FaGithub } from "react-icons/fa6";

import LinkButton from "@/components/ui/LinkButton";
import { GITHUB_LINK } from "@/lib/constants";
import { getContributors } from "@/lib/dal";
import type { Contributor } from "@/lib/types";

const ContributorsSection = async () => {
  const res = await getContributors();

  // Filter out contributors without avatar_url or html_url
  const validContributors =
    res.contributors?.filter((c: Contributor) => c.avatar_url && c.html_url) ||
    [];

  return (
    <section className="py-8">
      <div className="mb-8 flex flex-col items-center border-b border-gray-200 pb-6">
        <h2 className="mb-2 text-center text-3xl font-bold">مشارکت‌کنندگان</h2>
        <p className="text-gray-500">
          شما هم میتونید به بهبود ویجتیفای کمک کنید
        </p>
      </div>

      {res.message == "Contributors fetched successfully" ? (
        <>
          <div className="mb-8 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
            {validContributors.map((contributor, index: number) => (
              <ContributorImageLink
                key={`${contributor.login}-${index}`}
                {...contributor}
              />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <LinkButton
              icon={FaGithub}
              text="مشارکت در گیت‌هاب"
              href={GITHUB_LINK}
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl bg-linear-to-br from-blue-50 to-indigo-50 p-10 text-center">
          <p className="mb-1.5 text-lg text-black">
            😅 اوه نه! به نظر می‌رسد که به محدودیت نرخ GitHub رسیده‌ایم.
          </p>
          <p className="mb-2 text-sm text-gray-500">
            لطفاً بعداً دوباره تلاش کنید یا مستقیماً به پروژه در گیت‌هاب سر
            بزنید.
          </p>

          <LinkButton
            icon={FaGithub}
            text="مشارکت در گیت‌هاب"
            href={GITHUB_LINK}
            className="mx-auto"
          />
        </div>
      )}
    </section>
  );
};

export default ContributorsSection;
