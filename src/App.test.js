import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero content', () => {
  render(<App />);
  expect(screen.getByText(/S Varsha/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Cloud-Enabled Full-Stack Developer/i)
  ).toBeInTheDocument();
});
