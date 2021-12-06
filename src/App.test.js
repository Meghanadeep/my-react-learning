import { render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const textElement = screen.getByText(/Learn react hooks here/i);
  expect(textElement).toBeInTheDocument();
});
