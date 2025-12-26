"use client";

import { useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import RequestPasswordReset from "@auth/components/forgot-password/RequestPasswordReset";
import ResetPassword from "@auth/components/forgot-password/ResetPassword";
import ShowPasswordResetSuccessMessage from "@auth/components/forgot-password/ShowPasswordResetSuccessMessage";
import ShowRequestPasswordResetSuccessMessage from "@auth/components/forgot-password/ShowRequestPasswordResetSuccessMessage";

const ForgotPassword = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");
  const emailFromUrl = searchParams.get("email");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState(emailFromUrl || "");
  const [savedToken, setSavedToken] = useState<string | null>(token);

  const isResetMode = Boolean(savedToken && emailFromUrl);

  useEffect(() => {
    if (token && emailFromUrl) {
      setSavedToken(token);
      // Remove only token from URL, keep email
      router.replace(`/forgot-password?email=${emailFromUrl}`);
    }
  }, [token, emailFromUrl, router]);

  const handleRequestSuccess = (submittedEmail: string) => {
    setIsSubmitted(true);
    setEmail(submittedEmail);
  };
  const handleRequestAgain = () => {
    setIsSubmitted(false);
    setEmail("");
  };

  const handleResetSuccess = () => {
    setIsSubmitted(true);
  };

  if (isResetMode) {
    if (!isSubmitted)
      return (
        <ResetPassword
          email={emailFromUrl || ""}
          token={savedToken!}
          handleResetSuccess={handleResetSuccess}
        />
      );
    else return <ShowPasswordResetSuccessMessage />;
  } else {
    if (!isSubmitted)
      return (
        <RequestPasswordReset handleRequestSuccess={handleRequestSuccess} />
      );
    else
      return (
        <ShowRequestPasswordResetSuccessMessage
          email={email}
          handleRequestAgain={handleRequestAgain}
        />
      );
  }
};

export default ForgotPassword;
