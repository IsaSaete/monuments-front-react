import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it should show a title 'Monuments of the world' inside a heading", () => {
      render(<App />);

      const appTitle = screen.queryByRole("heading", {
        name: /monuments of the world/i,
        level: 1,
      });
      screen.debug();

      expect(appTitle).toBeVisible();
    });
  });
});
