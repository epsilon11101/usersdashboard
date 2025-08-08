// lib/utils.ts
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// import chroma from "chroma-js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
