import React, { ReactNode } from "react";

type ButtonOrAnchorProps = Omit<React.ComponentProps<"button">, "type"> &
  Omit<React.ComponentProps<"a">, "type" | "onClick">;

interface SimpleButtonProps extends ButtonOrAnchorProps {
  children: ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset"; // type は button のみで有効
}

export default function SimpleButton({
  children,
  onClick,
  className = "",
  href,
  type = "button",
  ...props
}: SimpleButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-between gap-x-2
    py-4 px-5
    border border-black
    bg-transparent
    text-lg font-medium
    cursor-pointer
    transition-all duration-300 ease-in-out
    group
    hover:bg-black hover:text-white
    focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-black
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      type={!href ? type : undefined}
      onClick={onClick}
      className={`${baseStyles} ${className}`}
      {...props}
    >
      <span className="mb-1">{children}</span>
      <ArrowIcon />
    </Component>
  );
}
