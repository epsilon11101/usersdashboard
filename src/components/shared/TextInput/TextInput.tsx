import React, { InputHTMLAttributes } from "react";
import Input from "../../ui/Input/Input";
import {
  ErrorMessage,
  FieldValuesFromFieldErrors,
} from "@hookform/error-message";
import {
  FieldErrors,
  FieldName,
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
      helperText={
        <ErrorMessage
          errors={errors}
          name={
            name as unknown as FieldName<
              FieldValuesFromFieldErrors<FieldErrors<T>>
            >
          }
          render={({ message }) => <p className="text-red-500">{message}</p>}
        />
      }
    />
  );
};

export default TextInput;
