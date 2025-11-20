import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About component', () => {
  render(<About />);
  
  // Check for the section title
  const titleElement = screen.getByRole('heading', { name: /About Me/i });
  expect(titleElement).toBeInTheDocument();

  // Check for the profile picture
  const profilePic = screen.getByAltText('Kelvin Alef');
  expect(profilePic).toBeInTheDocument();
  
  // Check for some text content
  const textElement = screen.getByText(/Highly experienced DevOps Engineer/i);
  expect(textElement).toBeInTheDocument();
});
