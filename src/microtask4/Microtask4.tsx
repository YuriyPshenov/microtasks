import React, {useState} from 'react';

const Microtask4 = () => {

    let[a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a);
    }

    const onClickHandlerReset = () => {
        setA(0)
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>inc</button>
            <button onClick={onClickHandlerReset}>0</button>
        </div>
    );
};

export default Microtask4;