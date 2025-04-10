import { render, screen } from "@testing-library/react";
import MonumentList from "./Monumentlist";
import { hombreAvion, tomateGigante } from "../../fixtures";

describe("Given the MonumentList component", () => {
  describe("When it receives  'El Hombre Avión' and 'Tomate Gigante", () => {
    test("Then it should show 'El Hombre Avión' and 'Tomato Gigante' inside a heading", () => {
      const monuments = [hombreAvion, tomateGigante];

      render(<MonumentList monuments={monuments} />);

      const hombreAvionCard = screen.getByRole("heading", {
        name: hombreAvion.name,
      });

      const tomateGiganteCard = screen.getByRole("heading", {
        name: tomateGigante.name,
      });

      expect(hombreAvionCard).toBeVisible();
      expect(tomateGiganteCard).toBeVisible();
    });
  });
});
