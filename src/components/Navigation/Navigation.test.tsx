import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Monuments' and 'Add monument' links", () => {
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>,
      );

      const monumentsLink = screen.getByRole("link", { name: /monuments/i });
      const addMonumentLink = screen.getByRole("link", {
        name: /add monument/i,
      });

      expect(monumentsLink).toBeVisible();
      expect(addMonumentLink).toBeVisible();
    });
  });
});
