import { Github } from "lucide-react";

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}
import { getContributors } from "@/app/lib/data";

const ContributorsSection = async () => {
  const contributors = await getContributors();

  // TODO: Hover on picture to show username and contributions count
  // TODO: Show Sajjad on limit
  return (
    <section className="py-8">
      <div className="mb-8 flex flex-col items-center border-b border-gray-200 pb-6">
        <h2 className="mb-2 text-center text-3xl font-bold">مشارکت‌کنندگان</h2>
        <p className="text-gray-500">
          شما هم میتونید به بهبود ویجتی‌فای کمک کنید
        </p>
      </div>

      {contributors?.length ? (
        <>
          <div className="mb-8 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
            {contributors.map((contributor: Contributor) => (
              <a
                key={contributor.login}
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="has-hover-persist flex flex-col items-center"
              >
                <div className="relative mb-3 overflow-hidden rounded-full bg-linear-to-br from-blue-100 to-indigo-100 transition-all duration-500">
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    className="hover-persist-item h-16 w-16 object-cover opacity-70 grayscale filter transition-all ease-in-out"
                    loading="lazy"
                  />
                </div>
              </a>
            ))}
          </div>
          <div className="flex justify-center">
            <a
              href="https://github.com/widgetify-app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-2xl border border-gray-400 px-4 py-2 text-sm text-gray-600 transition-all duration-300 hover:border-blue-400 hover:bg-gray-50 hover:shadow-sm"
            >
              <Github size={18} className="ml-2" />
              مشارکت در گیت‌هاب
            </a>
          </div>
        </>
      ) : (
        <div className="rounded-xl bg-linear-to-br from-blue-50 to-indigo-50 p-10 text-center">
          <p className="mb-2 text-lg">
            😅 اوه نه! به نظر می‌رسد که به محدودیت نرخ GitHub رسیده‌ایم.
          </p>
          <p className="text-gray-500">
            لطفاً بعداً دوباره تلاش کنید یا مستقیماً به پروژه در گیت‌هاب سر
            بزنید.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://github.com/widgetify-app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-md border bg-white px-4 py-2 text-sm text-gray-600 transition-colors hover:border-blue-400 hover:bg-gray-50"
            >
              <Github size={18} className="ml-2" />
              مشاهده در گیت‌هاب
            </a>
          </div>
        </div>
      )}

      <style>{`
    		@keyframes pulse-glow {
    			0% {
    				box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.3);
    			}
    			70% {
    				box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
    			}
    			100% {
    				box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
    			}
    		}

    		.pulse-animation {
    			animation: pulse-glow 2s infinite;
    		}

    		/* Base states */
    		.hover-persist-item {
    			transition-duration: 500ms;
    		}

    		/* Active states on hover */
    		.has-hover-persist:hover .hover-persist-item {
    			filter: grayscale(0);
    			opacity: 100%;
    			transform: scale(1.05);
    			transition-delay: 0s;
    		}

    		/* Persist effect after hover with delay */
    		.has-hover-persist .hover-persist-item {
    			transition-delay: 2s; /* Keep effect for 2s after hover ends */
    		}

    		/* Animation persistence */
    		.has-hover-persist:hover .animation-persist-item {
    			opacity: 1;
    			animation-play-state: running;
    			transition-delay: 0s;
    		}

    		.has-hover-persist .animation-persist-item {
    			transition-delay: 2s;
    			animation-play-state: running;
    		}

    		/* Text color persistence */
    		.has-hover-persist:hover .text-persist-item {
    			color: rgba(17, 24, 39, 1); /* text-gray-900 */
    			transition-delay: 0s;
    		}

    		.has-hover-persist .text-persist-item {
    			transition-delay: 2s;
    		}
    	`}</style>
    </section>
  );
};

export default ContributorsSection;
