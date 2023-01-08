import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

test('renders the app', async () => {
  render(<App />);
  const addToCartButton = screen.getByText(/Add to Cart/i);

  await userEvent.click(addToCartButton);
  
  console.log(addToCartButton);
  expect(linkElement).toBeInTheDocument();
});
