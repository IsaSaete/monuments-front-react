import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show a title 'Monuments of the world' inside a heading", () => {
      render(<Header />);

      const appTitle = screen.queryByRole("heading", {
        name: /monuments of the world/i,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });

    test("Then it should show a 'Monuments' and 'Add monument' links", () => {
      render(<Header />);

      const monumentLink = screen.queryByRole("link", { name: /monuments/i });
      const addMonumentLink = screen.queryByRole("link", {
        name: /add monument/i,
      });

      expect(monumentLink).toBeVisible();
      expect(addMonumentLink).toBeVisible();
    });
  });
});
