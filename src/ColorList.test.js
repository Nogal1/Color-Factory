import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import ColorList from "./components/ColorList";

const colors = [
    {name: 'red', value: '#ff0000'},
    {name: 'green', value: '#00ff00'},
    {name: 'blue', value: '#0000ff'},
];

test('renders all color names with links', () => {
    const { getByText } = render(
        <BrowserRouter>
            <ColorList colors={colors} />
        </BrowserRouter>
    );

    expect(getByText('red')).toBeInTheDocument();
    expect(getByText('green')).toBeInTheDocument();
    expect(getByText('blue')).toBeInTheDocument();

    // Ensure links to color details pages are present
    expect(getByText('red').closest('a')).toHaveAttribute('href', '/colors/red');
    expect(getByText('green').closest('a')).toHaveAttribute('href', '/colors/green');
    expect(getByText('blue').closest('a')).toHaveAttribute('href', '/colors/blue');
});