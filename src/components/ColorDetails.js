import React from "react";
import { useParams, Navigate } from 'react-router-dom';

function ColorDetails({ colors }) {
    const { color } = useParams();
    if (!colors.includes(color)) {
        return <Navigate to="/colors" />;
    }

    return (
        <div style={{ backgroundColor: color, height: '100vh', textAlign: 'center' }}>
            <h1>This is {color}!</h1>
            <Link to="/colors">Go back</Link>
        </div>
    );
}

export default ColorDetails;