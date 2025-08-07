import { cn } from "@/lib/utils";
import React, {
  ButtonHTMLAttributes,
  FC,
  ReactElement,
  ReactNode,
} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "text";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  children: ReactNode;
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  variant = "contained",
  startIcon,
  endIcon,
  fullWidth = false,
  type = "button",
  children,
  ...rest
}) => {
  const baseClasses = `
    w-max
    p-3
    text-shadow-2xs
    uppercase
    font-semibold
    cursor-pointer
    rounded-xl
    text-white
    transition
    duration-300
    ease-in-out
`;

  const variantClasses = {
    contained: "bg-primary-600 shadow-primary-400 hover:bg-primary-800 ",
    outlined:
      "border-2 border-primary-400 text-primary-600 hover:bg-primary-800 hover:text-white",
    text: "bg-transparent text-primary-600 hover:text-primary-800",
  };

  return (
    <button
      type={type}
      className={cn(
        baseClasses,
        variantClasses[variant],
        fullWidth && "w-full",
        className
      )}
      //   TODO: IMPLEMENT START & END ICONS
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
