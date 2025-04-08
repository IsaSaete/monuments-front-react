import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Monuments' and 'Add monument' links", () => {
      render(<Navigation />);

      const monumentsLink = screen.queryByRole("link", { name: /monuments/i });
      const addMonumentLink = screen.queryByRole("link", {
        name: /add monument/i,
      });

      expect(monumentsLink).toBeVisible();
      expect(addMonumentLink).toBeVisible();
    });
  });
});
