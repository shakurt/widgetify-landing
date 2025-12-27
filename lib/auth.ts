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
            "اووه! خیلی عجله داری. تعداد درخواست‌هات زیاد شد، کمی صبر کن و دوباره امتحان کن.",
        };
    }

    if (data.message === "RESET_PASSWORD_REQUEST_SUCCESS") {
      return {
        success: true,
        message:
          "لینک بازیابی رمز عبور برای شما ارسال شد. لطفاً صندوق ورودی (و پوشه Spam) ایمیلتان را چک کنید.",
      };
    }

    return {
      success: false,
      message: "یه مشکلی پیش اومد. مطمئنی اینترنت وصله؟",
    };
  } catch {
    return {
      success: false,
      message: "آخ! مثل اینکه ارتباطمون با سرور قطع شده.",
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

    if (!res.ok) {
      if (data.formValidation?.length > 0) {
        const errors: Record<string, string> = {};
        for (const error of data.formValidation) {
          if (error.property === "password") {
            errors.password =
              "رمزت خیلی ساده‌ست! باید حداقل ۸ کاراکتر و ترکیبی از حروف و اعداد باشه.";
          }
        }
        return {
          success: false,
          message: "لطفاً خطاهای فرم رو برطرف کن تا بتونیم ادامه بدیم.",
          error: errors,
        };
      }
    }

    if (res.status === 401) {
      return {
        success: false,
        message:
          "این لینک دیگه کار نمی‌کنه! یا منقضی شده یا قبلاً ازش استفاده کردی.",
      };
    }

    if (data.message === "PASSWORD_CHANGED")
      return {
        success: true,
        message:
          "ایول! رمزت عوض شد. حالا با خیال راحت برگرد به دنیای ویجتیفای.",
      };

    return {
      success: false,
      message: "تغییر رمز با شکست مواجه شد. یه بار دیگه شانس‌ت رو امتحان کن.",
    };
  } catch (error) {
    return {
      success: false,
      message: "مثل اینکه یه جای کار می‌لنگه! دوباره تلاش می‌کنی؟",
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

    const data: VerifyEmailResponse = await res.json();

    if (res.ok || data.message === "EMAIL_VERIFIED") {
      return {
        success: true,
        message:
          "هورا! حساب تو فعال شد. حالا می‌تونی از ابزارهای ویجتیفای استفاده کنی.",
      };
    }

    if (data.message === "VERIFICATION_FAILED") {
      return {
        success: false,
        message:
          "این لینک تایید معتبر نیست. شاید منقضی شده یا قبلاً حساب رو فعال کردی.",
      };
    }

    return {
      success: false,
      message: "تایید ایمیل انجام نشد. دوباره امتحان کن.",
    };
  } catch {
    return {
      success: false,
      message: "ارتباط برقرار نشد. وضعیت اینترنتت رو چک کن!",
    };
  }
};
