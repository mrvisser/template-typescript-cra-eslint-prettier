import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should render the learn react link', () => {
    expect.hasAssertions();
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
