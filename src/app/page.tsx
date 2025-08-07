"use client";
import TextInput from "@/components/shared/TextInput/TextInput";
import { useForm } from "react-hook-form";
import loginSchema, {
  loginSchemaType,
} from "../components/features/login/loginValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/Button/Button";

export default function Home() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<loginSchemaType>({
    mode: "onSubmit",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: loginSchemaType) => {
    console.log("Form submitted with:", data);
  };

  return (
    <main className="h-screen w-screen">
      <div
        className="h-full w-full flex flex-col  p-8
       items-center
       justify-between
      "
      >
        <div>
          <p className="text-white text-3xl">Welcome Back</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col  gap-4 "
        >
          <TextInput
            control={control}
            name="email"
            id="useEmailId"
            errors={errors}
            placeholder="Email"
            type="email"
          />
          <TextInput
            control={control}
            name="password"
            id="userPassword"
            errors={errors}
            placeholder="Password"
            type="password"
          />
          <Button type="submit" variant="contained" fullWidth>
            Log in
          </Button>
        </form>
        <div>
          <p className="text-white">
            Don´t have an account? <a className="text-primary-400">Sign up</a>
          </p>
        </div>
      </div>
    </main>
  );
}
