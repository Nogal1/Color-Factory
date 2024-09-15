import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function NewColorForm({ addColor }) {
    const [newColor, setNewColor ] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newColor) {
            addColor(newColor.toLowerCase());
            navigate('/colors');
        }
    };

    return (
        <div>
            <h1>Add a New Color</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Choose a color: </label>
                <input
                type="color"
                id="color"
                name="color"
                value={newColor}
                onChange={(e) => setNewColor(e.target.value)}
                />
            </form>
        </div>
    );
}

export default NewColorForm;