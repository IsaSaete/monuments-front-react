import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show a title 'Monuments of the world' inside a heading", () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const appTitle = screen.getByRole("heading", {
        name: /monuments of the world/i,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });

    test("Then it should show a 'Monuments' and 'Add monument' links", () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const monumentLink = screen.getByRole("link", { name: /monuments/i });
      const addMonumentLink = screen.getByRole("link", {
        name: /add monument/i,
      });

      expect(monumentLink).toBeVisible();
      expect(addMonumentLink).toBeVisible();
    });
  });
});
