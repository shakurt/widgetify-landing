"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import Toast, { type ToastVariant } from "@/components/ui/Toast";

type ToastData = {
  id: string;
  text: string;
  variant: ToastVariant;
  duration?: number;
};

type ToastContextType = {
  showToast: (text: string, variant: ToastVariant, duration?: number) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const showToast = useCallback(
    (text: string, variant: ToastVariant, duration: number = 5000) => {
      const id = `toast-${Date.now()}-${Math.random()}`;
      setToasts((prev) => [...prev, { id, text, variant, duration }]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed inset-x-0 bottom-8 z-50 flex flex-col items-center gap-2 px-4">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            text={toast.text}
            variant={toast.variant}
            duration={toast.duration}
            onClose={removeToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
