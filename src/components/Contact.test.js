import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders Contact component', () => {
  render(<Contact />);
  
  // Check for the section title
  const titleElement = screen.getByRole('heading', { name: /Contact/i });
  expect(titleElement).toBeInTheDocument();

  // Check for the email link
  const emailLink = screen.getByText('Send Email');
  expect(emailLink).toBeInTheDocument();
  expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:kelvin.alefs@gmail.com');

  // Check for the LinkedIn link
  const linkedinLink = screen.getByText('LinkedIn');
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink.closest('a')).toHaveAttribute('href', 'https://linkedin.com/in/kelvin-alef');
});
