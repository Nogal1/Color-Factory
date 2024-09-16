import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import '../App.css';

function ColorDetails({ colors }) {
  const { color } = useParams();

  // Check if color param exists and it's not undefined
  if (!color) {
    return <Navigate to="/colors" />;
  }

  const selectedColor = colors.find(c => c.name.toLowerCase() === color.toLowerCase());

  // If the color is not found, redirect to the color list
  if (!selectedColor) {
    return <Navigate to="/colors" />;
  }

  return (
    <div style={{ backgroundColor: selectedColor.value, height: '100vh', textAlign: 'center' }}>
      <h1>This is {selectedColor.name}!</h1>
      <p>Hex Value: {selectedColor.value}</p>
      <Link to="/colors">Go back</Link>
    </div>
  );
}

export default ColorDetails;
