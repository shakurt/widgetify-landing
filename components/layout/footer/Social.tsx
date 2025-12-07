import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

import {
  DISCORD_LINK,
  GITHUB_LINK,
  INSTAGRAM_LINK,
  TELEGRAM_LINK,
  X_LINK,
} from "@/constants";

import SocialLink from "./SocialLink";

const Social = () => {
  return (
    <nav
      className="container flex items-center justify-center gap-3"
      aria-label="شبکه‌های اجتماعی"
      role="navigation"
    >
      <SocialLink
        ariaLabel="Discord"
        href={DISCORD_LINK}
        className="hover:bg-indigo-500"
      >
        <FaDiscord />
      </SocialLink>

      <SocialLink
        ariaLabel="GitHub"
        href={GITHUB_LINK}
        className="hover:bg-gray-800"
      >
        <FaGithub />
      </SocialLink>

      <SocialLink
        ariaLabel="Telegram"
        href={TELEGRAM_LINK}
        className="hover:bg-blue-500"
      >
        <FaTelegram />
      </SocialLink>

      <SocialLink
        href={INSTAGRAM_LINK}
        className="hover:bg-linear-to-br hover:from-pink-500 hover:to-purple-600"
        ariaLabel="Instagram"
      >
        <FaInstagram />
      </SocialLink>

      <SocialLink href={X_LINK} className="hover:bg-blue-400" ariaLabel="X">
        <FaTwitter />
      </SocialLink>
    </nav>
  );
};

export default Social;
