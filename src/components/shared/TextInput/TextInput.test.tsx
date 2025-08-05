import { render, screen, waitFor } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "@/components/shared/TextInput/TextInput";
import { ChangeEventHandler, FC } from "react";
import userEvent from "@testing-library/user-event";

const loginSchema = z.object({
  email: z.email("Invalid email address"),
});

type LoginForm = z.infer<typeof loginSchema>;

interface FormWrapperProps {
  onSubmit: (data: LoginForm) => void;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

const FormWrapper: FC<FormWrapperProps> = ({ onSubmit, onChange }) => {
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
        onChange={onChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

describe("TextInput integration test", () => {
  const user = userEvent.setup();
  const email = "test@example.com";
  const onSubmit = jest.fn();

  it("should show error message when submitting invalid email", async () => {
    render(<FormWrapper onSubmit={onSubmit} />);

    const submit = screen.getByText("Submit");
    user.click(submit);

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Email")).toHaveAttribute(
        "aria-invalid"
      );
      expect(screen.getByText("Invalid email address")).toBeInTheDocument();
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  it("should call onSubmit with valid data", async () => {
    render(<FormWrapper onSubmit={onSubmit} />);

    const input = screen.getByPlaceholderText("Email");
    const submit = screen.getByText("Submit");

    await user.type(input, email);
    await user.click(submit);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    const submittedData = onSubmit.mock.calls[0][0];
    expect(submittedData).toEqual({ email: email });
    expect(screen.queryByText("Invalid email address")).not.toBeInTheDocument();
  });

  it("calls on changes when user typing", async () => {
    const onChange = jest.fn();

    render(<FormWrapper onSubmit={() => {}} onChange={onChange} />);

    const emailInput = screen.getByPlaceholderText("Email");

    await user.type(emailInput, email);

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(email.length);
  });
});
