// import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Testing the Greet Component", () => {
  it("should render a Hello with the name when name is provided", () => {
    // the render() function will render out component in virtual DOM that implemented by JsDom
    render(<Greet name="Red" />);

    // Find the element we want to interact with
    const element = screen.getByRole("heading");

    // Assert that the results are as expected
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/red/i);
    expect(element.innerHTML).toEqual("Hello Red");
  });

  it("should render a button when name is not provided", () => {
    // the render() function will render out component in virtual DOM that implemented by JsDom
    render(<Greet />);

    // Find the element we want to interact with
    const button = screen.getByRole("button");

    // Assert that the results are as expected
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
