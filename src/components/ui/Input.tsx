import clsx from "clsx";
import React, { FC, InputHTMLAttributes, Ref } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  ref: Ref<HTMLInputElement>;
  error: boolean;
}

const Input: FC<InputProps> = ({ type, className, error, ...rest }) => {
  const base = clsx(
    `
              h-[56px]
              w-[448px]
              border-1
              focus:outline-1
              rounded-xl
              text-white
              px-4
            `,
    error
      ? "border-e-red-500 text-red-500 outline-red-500"
      : "border-primary-300 text-white outline-primary-300"
  );

  return <input type={type} className={twMerge(base, className)} {...rest} />;
};

Input.displayName = "Input";
export default Input;
