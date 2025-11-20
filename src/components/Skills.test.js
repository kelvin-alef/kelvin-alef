import { render, screen } from '@testing-library/react';
import Skills from './Skills';

test('renders Skills component', () => {
  render(<Skills />);
  
  // Check for the section title
  const titleElement = screen.getByRole('heading', { name: /Featured Technologies/i });
  expect(titleElement).toBeInTheDocument();

  // Check for a few technology names to ensure the grid is populated
  expect(screen.getByText('Java')).toBeInTheDocument();
  expect(screen.getByText('Docker')).toBeInTheDocument();
  expect(screen.getByText('Kubernetes')).toBeInTheDocument();
  expect(screen.getByText('Jenkins')).toBeInTheDocument();
});
