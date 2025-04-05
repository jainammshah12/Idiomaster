"use client"

import React, { createContext, useState, useContext, ReactNode } from 'react';

export type ToastStatus = 'success' | 'error' | 'info' | 'warning' | '';

interface ToastContextType {
  showToast: (message: string, status: ToastStatus) => void;
  hideToast: () => void;
  message: string;
  status: ToastStatus;
  visible: boolean;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<ToastStatus>("");
  const [visible, setVisible] = useState(false);
  let toastTimeout: NodeJS.Timeout;
  let fadeTimeout: NodeJS.Timeout;

  const showToast = (message: string, status: ToastStatus) => {
    // Clear any existing timeouts
    if (toastTimeout) clearTimeout(toastTimeout);
    if (fadeTimeout) clearTimeout(fadeTimeout);
    
    setMessage(message);
    setStatus(status);
    setVisible(true);
    
    // Auto-hide after 10 seconds
    toastTimeout = setTimeout(() => {
      setVisible(false);
      fadeTimeout = setTimeout(() => {
        setMessage("");
        setStatus("");
      }, 300); // Allow time for fade-out animation
    }, 10000);
  };

  const hideToast = () => {
    setVisible(false);
    setTimeout(() => {
      setMessage("");
      setStatus("");
    }, 300);
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast, message, status, visible }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};