import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('redirects to colors list on invalid color route', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/colors/invalid-color']}>
      <App />
    </MemoryRouter>
  );

  // Ensure the user is redirected to the color list
  expect(getByText(/please select a color/i)).toBeInTheDocument();
});