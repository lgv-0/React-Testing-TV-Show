import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Render + Gets await message", () =>
    {
        const { getByText } = render(<App />);

        expect(getByText(/fetching data/i)).toBeInTheDocument();
    });