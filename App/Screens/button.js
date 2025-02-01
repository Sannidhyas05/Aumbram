// components/ui/button.js
import React from "react";

export const Button = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    ghost: "bg-transparent text-gray-500 hover:text-black",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };
  return (
    <button
      className={`rounded px-4 py-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
