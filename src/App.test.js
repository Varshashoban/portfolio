import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero content', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /S Varsha/i })).toBeInTheDocument();
  expect(
    screen.getByText(/Full-Stack Developer/i)
  ).toBeInTheDocument();
});
