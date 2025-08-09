import { cva, VariantProps } from "class-variance-authority";
import { ReactElement, ReactNode } from "react";

export const button = cva(
  [
    "p-3 text-shadow-2xs uppercase font-semibold cursor-pointer rounded-xl transition duration-300 ease-in-out",
  ],
  {
    variants: {
      variant: {
        contained: "text-white shadow-md",
        outlined: "border-2",
        text: "bg-transparent",
      },
      color: {
        primary: "",
        secondary: "",
        warning: "",
        error: "",
        success: "",
      },
      fullWidth: {
        true: "w-full",
        false: "w-max",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "contained",
        color: "primary",
        className: "bg-primary-600 hover:bg-primary-800 shadow-primary-400",
      },
      {
        variant: "contained",
        color: "secondary",
        className:
          "bg-secondary-600 hover:bg-secondary-800 shadow-secondary-400",
      },
      {
        variant: "contained",
        color: "warning",
        className: "bg-warning-600 hover:bg-warning-800 shadow-warning-400",
      },
      {
        variant: "contained",
        color: "error",
        className: "bg-error-600 hover:bg-error-800 shadow-error-400",
      },
      {
        variant: "contained",
        color: "success",
        className: "bg-success-600 hover:bg-success-800 shadow-success-400",
      },

      {
        variant: "outlined",
        color: "primary",
        className:
          "border-primary-400 text-primary-600 hover:bg-primary-800 hover:text-white",
      },
      {
        variant: "outlined",
        color: "secondary",
        className:
          "border-secondary-400 text-secondary-600 hover:bg-secondary-800 hover:text-white",
      },
      {
        variant: "outlined",
        color: "warning",
        className:
          "border-warning-400 text-warning-600 hover:bg-warning-800 hover:text-white",
      },
      {
        variant: "outlined",
        color: "error",
        className:
          "border-error-400 text-error-600 hover:bg-error-800 hover:text-white",
      },
      {
        variant: "outlined",
        color: "success",
        className:
          "border-success-400 text-success-600 hover:bg-success-800 hover:text-white",
      },

      {
        variant: "text",
        color: "primary",
        className: "text-primary-600 hover:text-primary-800",
      },
      {
        variant: "text",
        color: "secondary",
        className: "text-secondary-600 hover:text-secondary-800",
      },
      {
        variant: "text",
        color: "warning",
        className: "text-warning-600 hover:text-warning-800",
      },
      {
        variant: "text",
        color: "error",
        className: "text-error-600 hover:text-error-800",
      },
      {
        variant: "text",
        color: "success",
        className: "text-success-600 hover:text-success-800",
      },
    ],
    defaultVariants: {
      variant: "contained",
      color: "primary",
      disabled: false,
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      "color" | "disabled"
    >,
    VariantProps<typeof button> {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  children: ReactNode;
}
