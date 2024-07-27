import { render, screen } from "@testing-library/react";
import MainPage from "./MainPage";

describe("Main Page Component Test", () => {
  test("render MainPage true", () => {
    render(<MainPage condition={1} />);
    const linkElement = screen.getByText(/Main Page Compoent: First Condition/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("render MainPage false", () => {
    render(<MainPage condition={0} />);
    const linkElement = screen.getByText(/Main Page Compoent: Second Condition/i);
    expect(linkElement).toBeInTheDocument();
  });
});
