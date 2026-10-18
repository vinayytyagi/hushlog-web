import React from "react";

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="10" fill="#5B52CC" />
      <path d="M12 18H24M12 12H20M12 24H18" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="25" cy="24" r="3.5" fill="#1F7A55" />
    </svg>
  );
}
