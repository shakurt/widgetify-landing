"use client";

import { useState, useActionState } from "react";

import { requestPasswordResetAction } from "@auth/actions/auth";
import { LuMail, LuSend } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

import InputTextError from "@/components/ui/InputTextError";
import { useToast } from "@/components/ui/ToastContext";
import { type ActionResponse } from "@/lib/types";

type RequestPasswordResetProps = {
  handleRequestSuccess: (email: string) => void;
};

const initialState: ActionResponse = {
  success: false,
  message: "",
  error: {},
};

const RequestPasswordReset: React.FC<RequestPasswordResetProps> = ({
  handleRequestSuccess,
}) => {
  const { showToast } = useToast();
  const [error, setError] = useState("");

  const [state, formAction, isPending] = useActionState<
    ActionResponse,
    FormData
  >(
    async (
      prevState: ActionResponse,
      formData: FormData
    ): Promise<ActionResponse> => {
      try {
        const result = await requestPasswordResetAction(formData);

        if (!result.success) {
          if (
            result.message == "Validation Error" &&
            result.error &&
            result.error?.email
          ) {
            setError(result.error?.email);
            return result;
          }

          showToast(result.message, "error", 5000);
          return result;
        }

        if (result.success) {
          const email = formData.get("email") as string;
          handleRequestSuccess(email);
        }

        return result;
      } catch (error) {
        console.error("Something went wrong", error);
        const errorMsg = "خطایی رخ داده است. لطفاً مجدداً تلاش کنید.";
        showToast(errorMsg, "error", 5000);
        return { success: false, message: errorMsg };
      }
    },
    initialState
  );

  const baseEmailInputStyles =
    "flex w-full items-center justify-center rounded-lg p-3 font-medium text-white transition hover:scale-[1.03] active:scale-[0.97] ";

  return (
    <article
      dir="rtl"
      className="animate-fade-in rounded-xl border border-gray-200 bg-white p-4 shadow-lg transition md:p-6"
    >
      <header className="mb-4 text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 text-white transition-transform hover:scale-105 hover:rotate-3">
          <LuMail className="h-7 w-7" />
        </div>
        <p className="text-sm text-gray-600 md:text-base">
          ایمیل خود را وارد کنید. ما لینک بازیابی رمز عبور را برای شما ارسال
          خواهیم کرد.
        </p>
      </header>

      <form action={formAction} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            آدرس ایمیل
          </label>

          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            aria-label="آدرس ایمیل"
            aria-required="true"
            aria-invalid={!!error}
            className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="example@gmail.com"
            required
          />
          <InputTextError message={error} />
        </div>

        <button
          type="submit"
          disabled={isPending}
          aria-label="ارسال لینک بازیابی رمز عبور"
          aria-busy={isPending}
          className={
            isPending
              ? twMerge(baseEmailInputStyles, "cursor-not-allowed bg-gray-400")
              : twMerge(
                  baseEmailInputStyles,
                  "bg-linear-to-r from-blue-600 to-purple-600 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
                )
          }
        >
          {isPending ? (
            <div className="ml-2 h-5 w-5 animate-spin rounded-full border-2 border-t-2 border-white border-t-transparent" />
          ) : (
            <LuSend className="ml-2 h-4 w-4" />
          )}
          ارسال لینک بازیابی
        </button>
      </form>
    </article>
  );
};

export default RequestPasswordReset;
