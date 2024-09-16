// src/ColorDetails.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ColorDetails from './components/ColorDetails';

const colors = [
  { name: 'red', value: '#ff0000' },
  { name: 'green', value: '#00ff00' },
  { name: 'blue', value: '#0000ff' }
];

test('renders the selected color details', () => {
  const { getByText, getByRole } = render(
    <MemoryRouter initialEntries={['/colors/red']}>
      <Routes>
        <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />
      </Routes>
    </MemoryRouter>
  );

  // Check if the color details are correctly displayed
  expect(getByText(/this is red!/i)).toBeInTheDocument();
  expect(getByText(/hex value: #ff0000/i)).toBeInTheDocument();
  expect(getByRole('link', { name: /go back/i })).toHaveAttribute('href', '/colors');
});
