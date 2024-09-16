import React, { useState } from "react";

export function UserInput() {

    const [text, setText] = useState('');

    return (
        <>
            <input 
                type="text" 
                name="textInput"
                onChange={e => setText(e.target.value)}
            />
            <span> {text} </span>
        </>
    );
}