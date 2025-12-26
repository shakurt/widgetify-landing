"use client";

import { useActionState, useState } from "react";

import { LuCircleAlert, LuCheck, LuLock, LuMail } from "react-icons/lu";

import InputTextError from "@/components/ui/InputTextError";
import { useToast } from "@/components/ui/ToastContext";
import { ActionResponse } from "@/lib/types";

import { passwordResetAction } from "../../actions/auth";

type ResetPasswordProps = {
  email: string;
  token: string;
  handleResetSuccess: () => void;
};

const initialState: ActionResponse = {
  success: false,
  message: "",
  error: {},
};

const ResetPassword: React.FC<ResetPasswordProps> = ({
  email,
  token,
  handleResetSuccess,
}) => {
  const { showToast } = useToast();
  const [errorMessage, setErrorMessage] = useState("");
  const [errorValidations, setErrorValidations] =
    useState<Record<string, string>>();
  const [state, formAction, isPending] = useActionState<
    ActionResponse,
    FormData
  >(
    async (
      prevState: ActionResponse,
      formData: FormData
    ): Promise<ActionResponse> => {
      try {
        const result = await passwordResetAction(token, formData);

        if (!result.success) {
          if (result.message == "Validation Error" && result.error) {
            setErrorValidations({ ...result.error });

            if (result.error?.token) {
              setErrorMessage(result.error.token);
            }
          } else {
            showToast(result.message, "error", 5000);
          }

          return result;
        }

        if (result.success) {
          handleResetSuccess();
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

  return (
    <article
      dir="rtl"
      className="animate-fade-in rounded-xl border border-gray-200 bg-white p-4 shadow-lg transition md:p-6"
    >
      <header className="mb-4 text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 text-white transition-transform hover:scale-105 hover:rotate-3">
          <LuLock className="h-7 w-7" />
        </div>
        <p className="text-sm text-gray-600 md:text-base">
          لطفاً رمز عبور جدید خود را وارد کنید.
        </p>
        <p className="text-xs text-gray-500">
          رمز عبور باید حداقل ۸ کاراکتر و شامل حداقل یک حرف و یک عدد باشد.*
        </p>
      </header>

      <form action={formAction} className="space-y-4">
        <div aria-label="Email Input Container">
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            آدرس ایمیل
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              readOnly
              className="w-full cursor-not-allowed rounded-lg border border-gray-300 bg-gray-100 p-3 pr-10 text-gray-500"
            />
            <InputTextError message={errorValidations?.email} />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <LuMail size={18} className="text-gray-400" />
            </div>
          </div>
        </div>

        <div aria-label="Password Input Container">
          <label
            htmlFor="password"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            رمز عبور جدید
          </label>
          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              className={`w-full border p-3 pr-10 text-gray-900 ${
                errorValidations?.password
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              } rounded-lg focus:ring-2 focus:outline-none`}
              required
              placeholder="********"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <LuLock
                size={18}
                className={
                  errorValidations?.password ? "text-red-400" : "text-gray-400"
                }
              />
            </div>
          </div>
          <InputTextError message={errorValidations?.password} />
        </div>

        <div aria-label="Confirm Password Input Container">
          <label
            htmlFor="confirmPassword"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            تکرار رمز عبور جدید
          </label>
          <div className="relative">
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className={`w-full border p-3 pr-10 text-gray-900 ${
                errorValidations?.confirmPassword
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              } rounded-lg focus:ring-2 focus:outline-none`}
              required
              placeholder="********"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <LuLock
                size={18}
                className={
                  errorValidations?.confirmPassword
                    ? "text-red-400"
                    : "text-gray-400"
                }
              />
            </div>
          </div>
          <InputTextError message={errorValidations?.confirmPassword} />
        </div>

        {errorMessage && (
          <div className="rounded-lg bg-red-100 p-2.5 text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        <div className="mt-2 flex flex-col gap-3">
          <button
            type="submit"
            disabled={isPending}
            className={`flex w-full items-center justify-center rounded-lg p-3 font-medium text-white transition hover:scale-[1.03] active:scale-[0.97] ${
              isPending
                ? "cursor-not-allowed bg-gray-400"
                : "bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
            }`}
          >
            {isPending ? (
              <div className="ml-2 h-5 w-5 animate-spin rounded-full border-2 border-t-2 border-white border-t-transparent" />
            ) : (
              <LuCheck className="ml-2" size={18} />
            )}
            ذخیره رمز عبور جدید
          </button>
        </div>
      </form>
    </article>
  );
};

export default ResetPassword;
