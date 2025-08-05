import React, { FC, InputHTMLAttributes, Ref } from "react";
import { cn } from "../../app/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  ref: Ref<HTMLInputElement>;
  error: boolean;
}

const errorStyles = (hasError: boolean) => {
  return hasError
    ? "border-e-red-500 text-red-500 outline-red-500"
    : "border-primary-300 text-white outline-primary-300";
};

const Input: FC<InputProps> = ({ type, className, error, ...rest }) => {
  return (
    <input
      type={type}
      {...rest}
      aria-invalid={error || undefined}
      className={cn(
        `
              h-[56px]
              w-[448px]
              border-1
              focus:outline-1
              rounded-xl
              px-4
            `,
        errorStyles(error)
      )}
    />
  );
};

Input.displayName = "Input";
export default Input;
