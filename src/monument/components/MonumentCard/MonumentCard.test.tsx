import { render, screen } from "@testing-library/react";
import MonumentCard from "./MonumentCard";
import { hombreAvion } from "../../fixtures";

describe("Given the MonumentCard component", () => {
  describe("When it receives 'El hombre avión' monument", () => {
    test("Then it should show 'El hombre avión' inside a heading", () => {
      render(<MonumentCard monument={hombreAvion} />);

      const monumentName = screen.getByRole("heading", {
        name: /el hombre avión/i,
      });

      expect(monumentName).toBeVisible();
    });

    test("Then it should show an image of 'El hombre avion' monument", () => {
      render(<MonumentCard monument={hombreAvion} />);

      const imageAltText = screen.getByAltText(hombreAvion.imageAlt);

      expect(imageAltText).toBeVisible();
    });
  });
});
