import { render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const textElement = screen.getByText(/2021-11-11/i);
  expect(textElement).toBeInTheDocument();
});
