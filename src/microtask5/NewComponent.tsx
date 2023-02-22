import React from 'react';
import {FilterType} from "./Microtask5";

type NewComponentPropsType = {
    currentMoney: Array<{banknote: string, nominal: number, number: string}>
    callBack: (filter: FilterType) => void
}

export const NewComponent = (props: NewComponentPropsType) => {

    const onClickFilterHandler = (filter: FilterType) => {
        props.callBack(filter)
    }

    return (
        <div>
            <ul>
                {props.currentMoney.map((m, index) => <li key={index}>
                    <span>{m.banknote} </span>
                    <span>{m.nominal} </span>
                    <span>{m.number}</span>
                </li>)}
            </ul>
            <button onClick={() => onClickFilterHandler('all')}>All</button>
            <button onClick={() => onClickFilterHandler('ruble')}>Rubles</button>
            <button onClick={() => onClickFilterHandler('dollar')}>Dollars</button>
        </div>
    );
};