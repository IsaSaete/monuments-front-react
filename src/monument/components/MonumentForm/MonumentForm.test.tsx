import { render, screen } from "@testing-library/react";
import MonumentForm from "./MonumentForm";

describe("Given a MonumentForm component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Add a new monuemnt' inside a heading", () => {
      render(<MonumentForm />);

      const formTitle = screen.getByRole("heading", {
        name: /add a new monument/i,
      });

      expect(formTitle).toBeVisible();
    });

    test("Then it should show a 'Name' text box", () => {
      render(<MonumentForm />);

      const nameTextBox = screen.getByLabelText(/name/i);

      expect(nameTextBox).toBeVisible();
    });

    test("Then it should show a 'Add monument' inside a button", () => {
      render(<MonumentForm />);

      const button = screen.getByRole("button", { name: /add monument/i });

      expect(button).toBeVisible();
    });
  });
});
