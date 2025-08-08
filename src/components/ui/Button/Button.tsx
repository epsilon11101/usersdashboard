import { cn } from "@/lib/utils";
import { button, type ButtonProps } from "./button.cva";
import React, { FC } from "react";

const Button: FC<ButtonProps> = ({
  className,
  variant,
  color,
  startIcon,
  endIcon,
  fullWidth,
  type = "button",
  disabled,
  children,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={cn(button({ variant, color, fullWidth, disabled }), className)}
      {...rest}
    >
      {/* TODO: fix */}
      <span className="grid grid-cols-3 gap-2">
        <span>{startIcon}</span>
        <span>{children}</span>
        <span className="w-full flex justify-end">{endIcon}</span>
      </span>
    </button>
  );
};

export default Button;
