import { render, screen } from "@testing-library/react";
import MonumentCard from "./MonumentCard";
import Monument from "../../types";

describe("Given the MonumentCard component", () => {
  describe("When it receives a 'El hombre avión'monument", () => {
    test("Then it should show a a 'El hombre avión' inside a heading", () => {
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
        name: /El hombre avión/i,
      });

      expect(monumentName).toBeVisible();
    });
  });
});
