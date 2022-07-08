import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "./utils/test-utils";

import Header from "../components/header/Header";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/search",
  }),
}));

test("renders Header component", () => {
  // Arrange
  renderWithProviders(<Header />);

  // Act

  // Asert
  const headerElement = screen.getByText("Sign up");
  expect(headerElement).toBeInTheDocument();
});
