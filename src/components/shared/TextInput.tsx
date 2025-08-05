import React, { InputHTMLAttributes } from "react";
import Input from "../ui/Input";
import {
  FieldErrors,
  FieldPath,
  FieldValues,
  RegisterOptions,
  useController,
  UseFormReturn,
} from "react-hook-form";

type TextInputBaseType = InputHTMLAttributes<HTMLInputElement>;

interface TextInputProps<T extends FieldValues>
  extends Omit<TextInputBaseType, "name" | "value"> {
  name: FieldPath<T>;
  control: UseFormReturn<T>["control"];
  rules?: RegisterOptions<T, FieldPath<T>>;
  errors: FieldErrors<T>;
  register?: UseFormReturn<T>["register"];
}

const TextInput = <T extends FieldValues>({
  name,
  control,
  rules,
  onChange,
  errors,
  type,
  ...rest
}: TextInputProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });
  return (
    <>
      <Input
        {...field}
        type={type}
        onChange={(e) => {
          field.onChange(e);
          onChange?.(e);
        }}
        {...rest}
        value={field.value || ""}
        error={!!error}
      />
      {/* TODO: add errorMessage */}
    </>
  );
};

export default TextInput;
