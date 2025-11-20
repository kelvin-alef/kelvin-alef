import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header component', () => {
  render(<Header />);
  
  // Check for the main title text using a regex to handle the typewriter effect
  const titleElement = screen.getByText(/Kelvin Alef/i);
  expect(titleElement).toBeInTheDocument();

  // Check for navigation links
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Success Cases')).toBeInTheDocument();
  expect(screen.getByText('Skills')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
  
  // Check for the resume download link
  const resumeLink = screen.getByText('Download Resume');
  expect(resumeLink).toBeInTheDocument();
  expect(resumeLink.closest('a')).toHaveAttribute('href', '/kelvin-alef/resume.pdf');
});
