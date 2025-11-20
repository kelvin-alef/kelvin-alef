import { render, screen } from '@testing-library/react';
import SuccessCases from './SuccessCases';

test('renders SuccessCases component', () => {
  render(<SuccessCases />);
  
  // Check for the section title
  const titleElement = screen.getByRole('heading', { name: /Success Cases/i });
  expect(titleElement).toBeInTheDocument();

  // Check for the title of the first success case
  const caseTitle = screen.getByText('CI/CD Automation and Deployment Modernization');
  expect(caseTitle).toBeInTheDocument();

  // Check for a keyword from one of the descriptions
  const challengeText = screen.getByText(/Manual, slow, and error-prone/i);
  expect(challengeText).toBeInTheDocument();
});
