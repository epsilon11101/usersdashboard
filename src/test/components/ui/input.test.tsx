import Input from "@/components/ui/Input";
import { render, screen } from "@testing-library/react";
//TEST THE TEST TO VALID CONFIG REMOVE IN FUTURE
describe("Input component", () => {
  it("Renders with  no error", () => {
    render(<Input error={false} ref={null} placeholder="Email" />);
    const input = screen.getByPlaceholderText("Email");

    expect(input).toBeInTheDocument();
    expect(input).not.toHaveAttribute("aria-invalid");
    expect(input).toHaveClass("text-white");
  });

  it("Render with error", () => {
    render(<Input error={true} ref={null} placeholder="Email" />);
    const input = screen.getByPlaceholderText("Email");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("aria-invalid");
    expect(input).toHaveClass("text-red-500");
  });
});
