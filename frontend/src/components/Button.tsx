import { ReactElement } from "react";

interface ButtonPros {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
}

const variantClasses = {
  primary: "bg-violet-600 text-white",
  secondary: "bg-violet-300 text-violet-600",
};
const defaultStyles = "px-3 py-2 rounded-md font-light flex items-center";

export function Button({ onClick, variant, text, startIcon }: ButtonPros) {
  return (
    <button
      onClick={onClick}
      className={variantClasses[variant] + " " + defaultStyles}
    >
      <div className="pr-2">{startIcon}</div>
      {text}
    </button>
  );
}
