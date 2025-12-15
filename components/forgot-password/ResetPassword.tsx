import { useState } from "react";

import { LuCircleAlert, LuCheck, LuLock, LuMail } from "react-icons/lu";

interface ResetPasswordProps {
  email: string;
  token: string;
  onResetSuccess: () => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({
  email,
  token,
  onResetSuccess,
}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<{
    password?: string;
    confirmPassword?: string;
  }>({});

  const validatePassword = (password: string): string | undefined => {
    if (!password) {
      return "رمز عبور الزامی است";
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      return "رمز عبور باید حداقل ۸ کاراکتر و شامل حداقل یک حرف و یک عدد باشد";
    }

    return undefined;
  };

  const validateConfirmPassword = (
    confirmPassword: string
  ): string | undefined => {
    if (confirmPassword !== password) {
      return "تکرار رمز عبور با رمز عبور مطابقت ندارد";
    }

    return undefined;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);

    const errors = {
      password: passwordError,
      confirmPassword: confirmPasswordError,
    };

    setValidationErrors(errors);

    if (passwordError || confirmPasswordError) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://api.widgetify.ir/auth/forgot-password/verify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            token,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        if (data.formValidation?.length > 0) {
          const errors: { [key: string]: string } = {};
          for (const error of data.formValidation) {
            if (error.property === "password") {
              errors.password =
                "رمز عبور باید حداقل ۸ کاراکتر و شامل حداقل یک حرف و یک عدد باشد";
            }
          }
          setValidationErrors(errors);
          throw new Error("لطفاً خطاهای فرم را برطرف کنید");
        }

        throw new Error("خطا در تغییر رمز عبور. لطفاً مجدداً تلاش کنید.");
      }

      onResetSuccess();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "خطا در تغییر رمز عبور"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition">
      <div className="mb-4 text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 text-white transition-transform hover:scale-105 hover:rotate-3">
          <LuLock size={28} />
        </div>
        <p className="text-gray-600">لطفاً رمز عبور جدید خود را وارد کنید.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
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
              value={email || ""}
              readOnly
              className="w-full cursor-not-allowed rounded-lg border border-gray-300 bg-gray-100 p-3 pr-10 text-gray-500"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <LuMail size={18} className="text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            رمز عبور جدید
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full border p-3 pr-10 text-gray-900 ${
                validationErrors.password
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              } rounded-lg focus:ring-2 focus:outline-none`}
              placeholder="رمز عبور جدید"
              required
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <LuLock
                size={18}
                className={
                  validationErrors.password ? "text-red-400" : "text-gray-400"
                }
              />
            </div>
          </div>
          {validationErrors.password && (
            <p className="mt-1 text-sm text-red-600">
              <LuCircleAlert className="mr-1 inline h-4 w-4" />
              {validationErrors.password}
            </p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            رمز عبور باید حداقل ۸ کاراکتر و شامل حداقل یک حرف و یک عدد باشد
          </p>
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            تکرار رمز عبور جدید
          </label>
          <div className="relative">
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full border p-3 pr-10 text-gray-900 ${
                validationErrors.confirmPassword
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              } rounded-lg focus:ring-2 focus:outline-none`}
              placeholder="تکرار رمز عبور جدید"
              required
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <LuLock
                size={18}
                className={
                  validationErrors.confirmPassword
                    ? "text-red-400"
                    : "text-gray-400"
                }
              />
            </div>
          </div>
          {validationErrors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">
              <LuCircleAlert className="mr-1 inline h-4 w-4" />
              {validationErrors.confirmPassword}
            </p>
          )}
        </div>

        {errorMessage && (
          <div className="rounded-lg bg-red-100 p-2.5 text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        <div className="mt-2 flex flex-col gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex w-full items-center justify-center rounded-lg p-3 font-medium text-white transition hover:scale-[1.03] active:scale-[0.97] ${
              isSubmitting
                ? "cursor-not-allowed bg-gray-400"
                : "bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
            }`}
          >
            {isSubmitting ? (
              <div className="ml-2 h-5 w-5 animate-spin rounded-full border-2 border-t-2 border-white border-t-transparent" />
            ) : (
              <LuCheck className="ml-2" size={18} />
            )}
            ذخیره رمز عبور جدید
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
