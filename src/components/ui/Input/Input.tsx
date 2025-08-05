import React, { FC, InputHTMLAttributes, ReactElement, Ref } from "react";
import { cn } from "../../../lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  ref: Ref<HTMLInputElement>;
  error: boolean;
  helperText?: ReactElement | null;
}

const errorStyles = (hasError: boolean) => {
  return hasError
    ? "border-e-red-500 text-red-500 outline-red-500"
    : "border-primary-300 text-white outline-primary-300";
};

const Input: FC<InputProps> = ({
  type,
  className,
  error,
  helperText,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-2 justify-start items-start">
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
          errorStyles(error),
          className
        )}
      />
      {helperText}
    </div>
  );
};

Input.displayName = "Input";
export default Input;
