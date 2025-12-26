import { api } from "@/lib/api";
import type { ActionResponse } from "@/lib/types";

type postRequestPasswordResetResponse = {
  data: null;
  message: "RESET_PASSWORD_REQUEST_SUCCESS" | "FORGOT_PASSWORD_REQUEST_LIMIT";
};

export const postRequestPasswordReset = async (
  email: string
): Promise<ActionResponse> => {
  try {
    const res = await api("/auth/forgot-password", {
      body: JSON.stringify({ email }),
      method: "POST",
    });

    const data: postRequestPasswordResetResponse = await res.json();

    if (!res.ok) {
      if (data.message === "FORGOT_PASSWORD_REQUEST_LIMIT")
        return {
          success: false,
          message:
            "تعداد درخواست‌های بازیابی رمز عبور به حد مجاز رسیده است. لطفاً بعداً تلاش کنید.",
        };
    }

    if (data.message === "RESET_PASSWORD_REQUEST_SUCCESS") {
      return {
        success: true,
        message: "ایمیل بازیابی رمز عبور با موفقیت ارسال شد.",
      };
    }

    return {
      success: false,
      message: "خطایی رخ داده است. لطفاً مجدداً تلاش کنید.",
    };
  } catch (error) {
    console.error("Error POST Request Password Reset:", error);
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
};

type postPasswordResetResponse = {
  formValidation: Record<string, string>[];
  message: "PASSWORD_CHANGED" | string;
};

export const postPasswordReset = async (
  email: string,
  token: string,
  password: string
): Promise<ActionResponse> => {
  try {
    const res = await api("/auth/forgot-password/verify", {
      body: JSON.stringify({ email, token, password }),
      method: "POST",
    });

    const data: postPasswordResetResponse = await res.json();
    console.log("in lib");
    console.log(data);

    if (!res.ok) {
      if (data.formValidation?.length > 0) {
        const errors: Record<string, string> = {};
        for (const error of data.formValidation) {
          if (error.property === "password") {
            errors.password =
              "رمز عبور باید حداقل ۸ کاراکتر و شامل حداقل یک حرف و یک عدد باشد";
          }
        }
        return {
          success: false,
          message: "لطفاً خطاهای فرم را برطرف کنید",
          error: errors,
        };
      }
    }

    if (res.status === 401) {
      return {
        success: false,
        message: "توکن نامعتبر یا منقضی شده است. لطفاً دوباره تلاش کنید.",
      };
    }
    if (data.message === "PASSWORD_CHANGED")
      return {
        success: true,
        message: "رمز عبور با موفقیت تغییر یافت.",
      };

    return {
      success: false,
      message: "خطا در تغییر رمز عبور. لطفاً مجدداً تلاش کنید.",
    };
  } catch (error) {
    console.error("Error POST Password Reset:", error);
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
};

type VerifyEmailResponse = {
  data: null;
  message: "EMAIL_VERIFIED" | "VERIFICATION_FAILED";
};
export const postVerifyEmail = async (
  token: string,
  email: string
): Promise<ActionResponse> => {
  try {
    const res = await api("/auth/email/verify", {
      body: JSON.stringify({ email, token }),
      method: "POST",
    });

    if (!res.ok)
      return {
        success: false,
        message: "خطایی رخ داده است. لطفاً مجدداً تلاش کنید.",
      };

    const data: VerifyEmailResponse = await res.json();
    if (data.message === "EMAIL_VERIFIED")
      return { success: true, message: "ایمیل با موفقیت تایید شد." };
    if (data.message === "VERIFICATION_FAILED")
      return {
        success: false,
        message:
          "تایید ایمیل ناموفق بود. لینک ممکن است منقضی شده یا قبلاً استفاده شده باشد.",
      };
    return {
      success: false,
      message: "خطا در تایید ایمیل. لطفاً مجدداً تلاش کنید.",
    };
  } catch (error) {
    console.error("Error POST Verify Email:", error);

    return {
      success: false,
      message: "Something went wrong!",
    };
  }
};
