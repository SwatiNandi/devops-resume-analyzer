import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the resume analyzer hero section', () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    level: 1,
    name: /AI resume analysis made simple/i,
  });
  const fileInput = screen.getByLabelText(/choose resume/i);

  expect(heading).toBeInTheDocument();
  expect(fileInput).toBeInTheDocument();

});
