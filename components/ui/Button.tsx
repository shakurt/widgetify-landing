import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  className?: string;
  variant: "gradient" | "text";
  disabled?: boolean;
  pending?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  className,
  variant,
  disabled = false,
  pending = false,
  onClick,
}) => {
  const base =
    "w-full rounded-lg p-3 font-medium text-white hover:scale-[1.03] hover:shadow-lg active:scale-[0.97]";

  const gradientClasses =
    " bg-linear-to-r from-blue-600 to-purple-600 transition hover:from-blue-700 hover:to-purple-700";

  return (
    <button
      type={type}
      className={twMerge(
        base,
        variant === "gradient" && gradientClasses,
        (disabled || pending) &&
          "cursor-not-allowed bg-gray-400 hover:scale-100 hover:shadow-none",
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {pending ? (
        <div className="ml-2 h-5 w-5 animate-spin rounded-full border-2 border-t-2 border-white border-t-transparent" />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
