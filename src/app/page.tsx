"use client";
import TextInput from "@/components/shared/TextInput";
import { useForm } from "react-hook-form";
import loginSchema, {
  loginSchemaType,
} from "../components/features/login/loginValidation";
import { zodResolver } from "@hookform/resolvers/zod";

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
        <div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextInput
              control={control}
              name="email"
              id="useEmailId"
              errors={errors}
              placeholder="Email"
              type="email"
            />
            <button type="submit" className="bg-pink-400">
              submit
            </button>
          </form>
        </div>
        <div>
          <p className="text-white">
            Don´t have an account? <a className="text-primary-400">Sign up</a>
          </p>
        </div>
      </div>
    </main>
  );
}
