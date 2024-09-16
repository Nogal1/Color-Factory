import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function ColorList({ colors }) {
  return (
    <div>
      <h1>Welcome to the Color Factory</h1>
      <h2>Please select a color</h2>
      <ul>
        {colors.map((color, idx) => (
          <li key={idx}>
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/colors/new">Add a New Color</Link>
    </div>
  );
}

export default ColorList;
