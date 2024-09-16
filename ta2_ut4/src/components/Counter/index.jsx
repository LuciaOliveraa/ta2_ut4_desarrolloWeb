import React, { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    function countUp() {
        setCount(count +1);
    }

    function countDown() {
        setCount(count -1);
    }

    return (
        <div className="card">
            <span className="content"> {count} </span>
            <button className="card-footer-item" onClick={countUp}> Aumentar contador </button>
            <button className="card-footer-item" onClick={countDown}> Disminuir contador </button>
        </div>
    );
}