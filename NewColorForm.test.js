import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import NewColorForm from "./src/components/NewColorForm";

test('submits new color and redirects', () => {
    const addColor = jest.fn();
    const { getByLabelText, getByText } = render(
        <BrowserRouter>
            <NewColorForm addColor={addColor} />
        </BrowserRouter>
    );

    // Fill out the form
    fireEvent.change(getByLabelText(/color name/i), {target: {value: 'purple' } });
    fireEvent.change(getByLabelText(/pick a color/i), {target: {value: '#800080' } });

    // Submit the form
    fireEvent.click(getByText(/add color/i));

    // Ensure addColor function is called with correct values
    expect(addColor).toHaveBeenCalledWith({name: 'purple', value: '#800080' });
});