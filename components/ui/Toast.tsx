"use client";

import { useEffect, useState } from "react";
import {
  LuCircleCheck,
  LuCircleAlert,
  LuX,
  LuTriangleAlert,
} from "react-icons/lu";

export type ToastVariant = "success" | "warning" | "error";

export type ToastProps = {
  id: string;
  text: string;
  variant: ToastVariant;
  duration?: number;
  onClose: (id: string) => void;
};

const Toast: React.FC<ToastProps> = ({
  id,
  text,
  variant,
  duration = 5000,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(id);
    }, 300); // Match animation duration
  };

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [id, duration]);

  const variantStyles = {
    success: {
      bg: "bg-green-50 border-green-200",
      icon: <LuCircleCheck className="h-5 w-5 text-green-600" />,
      text: "text-green-800",
    },
    warning: {
      bg: "bg-yellow-50 border-yellow-200",
      icon: <LuTriangleAlert className="h-5 w-5 text-yellow-600" />,
      text: "text-yellow-800",
    },
    error: {
      bg: "bg-red-50 border-red-200",
      icon: <LuCircleAlert className="h-5 w-5 text-red-600" />,
      text: "text-red-800",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div
      className={`flex max-w-md min-w-[320px] items-center gap-3 rounded-lg border p-4 shadow-lg ${styles.bg} ${isClosing ? "animate-toast-out" : "animate-toast-in"}`}
      role="alert"
      aria-live="polite"
    >
      <div className="shrink-0">{styles.icon}</div>
      <p className={`flex-1 text-sm font-medium ${styles.text}`}>{text}</p>
      <button
        onClick={handleClose}
        className="shrink-0 rounded-lg p-1 transition-colors hover:bg-black/5"
        aria-label="بستن"
      >
        <LuX className="h-4 w-4 text-gray-500" />
      </button>
    </div>
  );
};

export default Toast;
