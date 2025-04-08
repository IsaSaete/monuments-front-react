import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show a title 'Monuments of the world' inside a heading", () => {
      render(<Header />);

      const appTitle = screen.queryByRole("heading", {
        name: "Monuments of the world",
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });
  });
});
