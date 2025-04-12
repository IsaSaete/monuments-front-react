import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'OOPS! The page you requested could not be found.' inside a heading", () => {
      render(<NotFoundPage />);

      const pageNotFoundTitle = screen.getByRole("heading", {
        name: /oops! the page you requested could not be found/i,
      });

      expect(pageNotFoundTitle).toBeVisible();
    });

    test("Then it should show an image of an angry cat", () => {
      render(<NotFoundPage />);

      const imageAltText = screen.getByAltText(
        "Drawing of an angry cat that has chewed the TV cable and on it appears an error 404, not found",
      );

      expect(imageAltText).toBeVisible();
    });
  });
});
