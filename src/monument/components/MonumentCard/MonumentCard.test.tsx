import { render, screen } from "@testing-library/react";
import MonumentCard from "./MonumentCard";
import Monument from "../../types";

describe("Given the MonumentCard component", () => {
  describe("When it receives 'El hombre avión' monument", () => {
    test("Then it should show 'El hombre avión' inside a heading", () => {
      const hombreAvion: Monument = {
        name: "El hombre avión",
        description: "",
        imageUrl: "",
        imageAlt: "",
        id: "",
        country: "",
        city: "",
      };

      render(<MonumentCard monument={hombreAvion} />);

      const monumentName = screen.getByRole("heading", {
        name: /el hombre avión/i,
      });

      expect(monumentName).toBeVisible();
    });
  });
});
