import React from "react";
import Button from "./Button";
import { useState } from "react";

export default function QueryBar({ setQuery, setBookLimit }) {
    const [newLimit, setNewLimit] = useState()

    function amendLimitSize(event) {
        setBookLimit(+event.target.value)
    }

    return (
        <div>
            <Button label="Quilting" onClick={() => setQuery("quilting")} />
            <Button
                label="Architecture"
                onClick={() => setQuery("architecture")}
            />
            <Button label="Coding" onClick={() => setQuery("coding")} />
            <br />
            <label htmlFor="limitBooks">Limit books to:&nbsp;</label>
            <select name="limitBooks" id="limitBooks" onChange={amendLimitSize}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="40">40</option>
            </select>
        </div>
    );
}
