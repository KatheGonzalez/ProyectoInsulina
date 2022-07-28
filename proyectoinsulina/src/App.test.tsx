
import { render, screen } from '@testing-library/react';
import LogInPage from './pages/logInPage';


test('renders learn react link', () => {
  render(<LogInPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
