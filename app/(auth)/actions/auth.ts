"use server";

import { postPasswordReset, postRequestPasswordReset } from "@/lib/auth";
import { isEmail, isEmpty, isStrongPassword } from "@/lib/utils";

export async function requestPasswordResetAction(formData: FormData) {
  const email = formData.get("email") as string;

  if (isEmpty(email))
    return {
      success: false,
      message: "Validation Error",
      error: {
        email: "ایمیل الزامی است",
      },
    };

  if (!isEmail(email))
    return {
      success: false,
      message: "Validation Error",
      error: {
        email: "ایمیل وارد شده معتبر نیست",
      },
    };

  try {
    const res = await postRequestPasswordReset(email);

    return res;
  } catch (error) {
    console.error("Error in requestPasswordReset action:", error);
    return {
      success: false,
      message: "خطایی رخ داده است. لطفاً مجدداً تلاش کنید.",
    };
  }
}

export async function passwordResetAction(token: string, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirm-password") as string;

  if (isEmpty(token))
    return {
      success: false,
      message: "Validation Error",
      error: { token: "توکن الزامی است" },
    };

  if (isEmpty(email))
    return {
      success: false,
      message: "Validation Error",
      error: {
        email: "ایمیل الزامی است",
      },
    };

  if (!isEmail(email))
    return {
      success: false,
      message: "Validation Error",
      error: {
        email: "ایمیل وارد شده معتبر نیست",
      },
    };

  if (isEmpty(password))
    return {
      success: false,
      message: "Validation Error",
      error: {
        password: "رمز عبور الزامی است",
      },
    };

  if (!isStrongPassword(password))
    return {
      success: false,
      message: "Validation Error",
      error: {
        password:
          "رمز عبور باید حداقل ۸ کاراکتر لاتین و شامل حداقل یک حرف و یک عدد باشد",
      },
    };

  if (isEmpty(confirmPassword))
    return {
      success: false,
      message: "Validation Error",
      error: {
        confirmPassword: "تکرار رمز عبور الزامی است",
      },
    };

  if (confirmPassword !== password) {
    return {
      success: false,
      message: "Validation Error",
      error: {
        confirmPassword: "تکرار رمز عبور با رمز عبور مطابقت ندارد",
      },
    };
  }

  try {
    const res = await postPasswordReset(email, token, password);
    console.log("in action");
    console.log(res);
    if (res.error) {
      return { success: false, message: "Validation Error", error: res.error };
    }

    return res;
  } catch (error) {
    console.error("Error in passwordReset action:", error);
    return {
      success: false,
      message: "خطایی رخ داده است. لطفاً مجدداً تلاش کنید.",
    };
  }
}
