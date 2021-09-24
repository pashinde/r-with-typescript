import React, { useState } from "react";
import {IState as Props} from "../App";

interface IProps {
    people: Props['people'],
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        img: "",
        age: "",
        note: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const handleClick = (): void => {
        if (!input.name || !input.age || !input.img) {
            return;
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note
            }
        ])
    };

    return (
        <div className="AddToList">
            <input type="text" name="name" value={input.name} onChange={handleChange} placeholder="name" className="AddToList-input" />
            <input type="text" name="img" value={input.img} onChange={handleChange} placeholder="Image url" className="AddToList-input" />
            <input type="number" name="age" value={input.age} onChange={handleChange} placeholder="age" className="AddToList-input" />
            <textarea name="note" value={input.note} onChange={handleChange} placeholder="note" className="AddToList-input" />
            <button onClick={handleClick} className="AddToList-btn">
                Add To List
            </button>
        </div>
    );
};

export default AddToList;