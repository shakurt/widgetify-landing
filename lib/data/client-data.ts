// Auth
type VerifyEmailResponse = {
  data: null;
  message: "EMAIL_VERIFIED" | "VERIFICATION_FAILED";
};
export const postVerifyEmail = async (token: string, email: string) => {
  try {
    const res = await fetch("https://api.widgetify.ir/auth/email/verify", {
      method: "POST",
      body: JSON.stringify({ token, email }),
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error(
        `Failed to POST verify-email: ${res.status} ${res.statusText}`
      );
    }

    const data: VerifyEmailResponse = await res.json();

    return data;
  } catch (error) {
    console.error("Error POST verify-email:", error);

    return {
      data: null,
      message: "Something went wrong!",
    };
  }
};

//   async sendVerificationEmail(): Promise<void> {
//     const api = await getMainClient();
//     const response = await api.post("/auth/email/resend-verify");
//     return response.data;
//   }
