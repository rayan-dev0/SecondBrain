import { ReactElement } from "react";
import { Spinner } from "../icons/Spinner";

interface ButtonPros {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantClasses = {
  primary: `bg-violet-600 text-white hover:bg-violet-500`,
  secondary: `bg-violet-300 text-violet-600 hover:bg-violet-200`,
};
const defaultStyles =
  "px-3 py-2 rounded-md font-light flex items-center justify-center transition-all duration-150";

export function Button({
  onClick,
  variant,
  text,
  startIcon,
  fullWidth,
  loading,
}: ButtonPros) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={
        variantClasses[variant] +
        " " +
        defaultStyles +
        `${fullWidth ? " w-full flex justify-center items-center" : " "} ${
          loading && variant == "primary" ? "opacity-40 " : ""
        }`
      }
    >
      {startIcon && <div className="pr-2">{startIcon}</div>}
      {loading && (
        <span className="mr-2">
          <Spinner />
        </span>
      )}
      {text}
    </button>
  );
}
