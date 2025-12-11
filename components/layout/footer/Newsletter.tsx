// TODO: whenever newsletter backend is ready, connect this form to it

"use client";

import { useState } from "react";

import { handleNewsletterSubscription } from "@/app/actions/newsletter";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setMessage({ type: "error", text: "لطفاً ایمیل خود را وارد کنید." });
      return;
    }

    setIsLoading(true);

    try {
      const result = await handleNewsletterSubscription(email);
      setMessage({
        type: result.success ? "success" : "error",
        text: result.message,
      });

      if (result.success) {
        setEmail("");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setMessage({ type: "error", text: "خطایی رخ داد. دوباره سعی کنید" });
    } finally {
      setIsLoading(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <section>
      <h3 className="mb-4 text-lg font-bold">خبرنامه</h3>
      <p className="mb-4 text-sm text-gray-600">
        برای دریافت آخرین اخبار و ویژگی‌های جدید، ایمیل خود را ثبت کنید.
      </p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="email"
          placeholder="ایمیل شما"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm transition-colors focus:border-blue-600 focus:outline-none"
          disabled={isLoading}
          aria-label="آدرس ایمیل برای خبرنامه"
        />
        {message && (
          <p
            className={`mr-1 mb-2 text-xs ${
              message.type === "success" ? "text-green-600" : "text-red-600"
            }`}
            role="alert"
          >
            {message.text}
          </p>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="btn-base btn-primary w-full"
          aria-label="ثبت ایمیل برای خبرنامه"
        >
          {isLoading ? "درحال ارسال..." : "ثبت"}
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
