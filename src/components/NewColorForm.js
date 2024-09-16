import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function NewColorForm({ addColor }) {
  const [colorName, setColorName] = useState('');
  const [colorValue, setColorValue] = useState('#000000'); // Default color value
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (colorName) {
      addColor({ name: colorName.toLowerCase(), value: colorValue });
      navigate('/colors');
    }
  };

  return (
    <div>
      <h1>Add a New Color</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="colorName">Color Name: </label>
        <input
          type="text"
          id="colorName"
          name="colorName"
          value={colorName}
          onChange={(e) => setColorName(e.target.value)}
        />
        <br />
        <label htmlFor="colorValue">Pick a Color: </label>
        <input
          type="color"
          id="colorValue"
          name="colorValue"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
        />
        <br />
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
}

export default NewColorForm;
