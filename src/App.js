import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ColorList from "./components/ColorList";
import ColorDetails from "./components/ColorDetails";
import NewColorForm from "./components/NewColorForm";
import Nav from "./components/Nav";

function App() {
  const [colors, setColors] = useState(() => {
    const savedColors = localStorage.getItem('colors');
    return savedColors
      ? JSON.parse(savedColors)
      : [
        { name: 'red', value: '#ff0000' },
        { name: 'green', value: '#00ff00' },
        { name: 'blue', value: '#0000ff' }
        ];
  });

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  const addColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
        <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </Router>
  );
}

export default App;