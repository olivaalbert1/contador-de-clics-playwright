import { render, screen } from '@testing-library/react';
import App from './App';

test('Page shows Decrementar button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Decrementar/i);
  expect(linkElement).toBeInTheDocument
});
