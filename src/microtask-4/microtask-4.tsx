import React, {useState} from "react";

// microtask-4

export const Header1 = () => {
    // let a = 1

    let[a, setA]=useState(0)

    const onClickHandler = () => {
        setA(++a)
    }

    const onClickHandler2 = () => {
        setA(a = 0)
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler2}>0</button>
        </div>
    )
}