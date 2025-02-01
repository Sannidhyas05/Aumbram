// components/ui/input.js
import React from "react";

export const Input = ({ className = "", ...props }) => (
  <Input
    className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 ${className}`}
    {...props}
  />
);
