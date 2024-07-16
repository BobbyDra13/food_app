import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should render contact us page", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("should render button text inside contact us page", () => {
  render(<Contact />);
  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument();
});
