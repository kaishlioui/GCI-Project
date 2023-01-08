import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders the app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Our Services/i);
  expect(linkElement).toBeInTheDocument();
});

test("adds first item to cart", async () => {
  render(<App />);
  const item = (await screen.findAllByRole("article")).at(0);
  const button = await within(item).findByRole("button");
  const title = (await within(item).findByRole("heading")).textContent;

  userEvent.click(button);

  const cart = await screen.findByRole("list");

  expect(cart).toHaveTextContent(title);
});
