import { cn } from "@/lib/utils";
import {
  Children,
  cloneElement,
  CSSProperties,
  HTMLAttributes,
  ReactElement,
  SyntheticEvent,
} from "react";
import { mergeHandler } from "../../../lib/utils";

type childrenProps<T> = {
  children: ReactElement;
  style?: CSSProperties;
  className: string;
} & T;

interface SlotProps<T> extends HTMLAttributes<HTMLElement> {
  children: ReactElement<childrenProps<T>>;
}

function Slot<T extends Record<string, unknown>>({
  children,
  className,
  ...rest
}: SlotProps<T>) {
  const child = Children.only(children);

  const mergedProps = Object.entries(rest).reduce((acc, [key, value]) => {
    if (key.startsWith("on") && typeof value === "function") {
      //validate if the child has similar event
      if (child?.props[key] && typeof child.props[key] === "function") {
        acc[key] = mergeHandler(
          value,
          child.props[key] as (e: SyntheticEvent) => void
        );
      } else {
        acc[key] = value;
      }
    } else {
      acc[key] = value;
    }
    return acc;
  }, {} as Record<string, unknown>);

  const mergedClasses = cn(child.props.className, className);
  const mergedStyles = {
    ...child.props.style,
    ...rest.style,
  };

  const finalProps = {
    ...child.props,
    ...mergedProps,
    className: mergedClasses,
    style: mergedStyles,
  };

  return cloneElement(child, finalProps);
}

export default Slot;
