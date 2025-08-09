// lib/utils.ts
import { clsx, ClassValue } from "clsx";
import { SyntheticEvent } from "react";
import { twMerge } from "tailwind-merge";
// import chroma from "chroma-js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export function mergeHandler<T extends SyntheticEvent>(
  slotHandlers?: (e: T) => void,
  childHandlers?: (e: T) => void
) {
  return (e: T) => {
    childHandlers?.(e);
    if (!e.isPropagationStopped?.()) slotHandlers?.(e);
  };
}
