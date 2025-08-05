import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "@/components/shared/TextInput/TextInput";

const loginSchema = z.object({
  email: z.email("Invalid email address"),
});

type LoginForm = z.infer<typeof loginSchema>;

const FormWrapper = ({ onSubmit }: { onSubmit: (data: LoginForm) => void }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextInput
        name="email"
        control={control}
        errors={errors}
        placeholder="Email"
        type="email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

describe("TextInput integration test", () => {
  it("should show error message when submitting invalid email", async () => {
    const onSubmit = jest.fn();
    render(<FormWrapper onSubmit={onSubmit} />);

    const submit = screen.getByText("Submit");
    fireEvent.click(submit);

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Email")).toHaveAttribute(
        "aria-invalid"
      );
      expect(screen.getByText("Invalid email address")).toBeInTheDocument();
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  it("should call onSubmit with valid data", async () => {
    const onSubmit = jest.fn();
    render(<FormWrapper onSubmit={onSubmit} />);

    const input = screen.getByPlaceholderText("Email");
    const submit = screen.getByText("Submit");

    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.click(submit);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    const submittedData = onSubmit.mock.calls[0][0];
    expect(submittedData).toEqual({ email: "test@example.com" });
    expect(screen.queryByText("Invalid email address")).not.toBeInTheDocument();
  });
});
