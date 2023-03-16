import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('should render "Learn React" link', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /learn react/i });
    expect(link).toBeInTheDocument();
  });
});