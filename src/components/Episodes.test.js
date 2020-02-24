import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

test("Render + Shows Proper Data", () =>
    {
        const { getByText, queryByText, rerender } = render(<Episodes episodes={[]} />);

        expect(queryByText(/yah00/i)).toEqual(null);

        rerender(<Episodes episodes={[
        { id:5, url:"https://google.com/", name:"Yah00", season: 1, number: 1,
        airdate: "2020-01-01", airtime: "", airstamp: "2016-07-15T12:00:00+00:00", runtime: 60, image:
        { medium:"", original:"" },
        summary:"<p>Just another summary</p>", _links: { href:"apilink.com" }
        }]} />);

        expect(getByText(/yah00/i)).toBeInTheDocument();
        expect(getByText("Just another summary")).toBeInTheDocument();
    });