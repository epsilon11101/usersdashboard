"use client";
import TextInput from "@/components/shared/TextInput/TextInput";
import { useForm } from "react-hook-form";
import loginSchema, {
  loginSchemaType,
} from "../components/features/login/loginValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/Button/Button";
import { ScanFace } from "lucide-react";
import Slot from "@/components/ui/Slot/Slot";

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
          <Button
            type="submit"
            variant="contained"
            fullWidth
            startIcon={<ScanFace />}
            endIcon={<ScanFace />}
          >
            Log in
          </Button>
        </form>
        <div>
          <p className="text-white">
            Don´t have an account?{" "}
            <a className="text-primary-400 hover:cursor-pointer">Sign up</a>
          </p>
        </div>
        <div>
          <Slot
            className="p-2 bg-amber-300"
            data-x="1"
            style={{
              background: "red",
              color: "purple",
            }}
            onClick={() => {
              console.log("hola desde slot");
            }}
          >
            <button
              className="btn"
              onClick={() => {
                console.log("hola desde hijo");
              }}
              style={{
                textAlign: "center",
                color: "purple",
              }}
            >
              TEST SLOT
            </button>
          </Slot>
        </div>
      </div>
    </main>
  );
}
