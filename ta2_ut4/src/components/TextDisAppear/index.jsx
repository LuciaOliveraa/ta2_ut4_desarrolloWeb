import React, { useState } from "react";

export function TextDisAppear() {
    const [disAppear, setDisAppear] = useState(true);

    function handleClick() {
        setDisAppear(!disAppear);
    }

    return (
        <div className="card">
            {disAppear && <span className="content"> acá estoy </span>}
            <button className="card-footer-item" onClick={handleClick}> truquito </button>
        </div>
    )
}