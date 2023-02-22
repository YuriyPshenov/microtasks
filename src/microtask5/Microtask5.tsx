import React, {useState} from 'react';
import {NewComponent} from "./NewComponent";

export type FilterType = 'all' | 'ruble' | 'dollar'

const Microtask5 = () => {

    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney

    if (filter === 'ruble') {
        currentMoney = money.filter(m => m.banknote === filter)
    } else if (filter === 'dollar') {
        currentMoney = money.filter(m => m.banknote === filter)
    } else {
        currentMoney = money
    }

    const onClickFilterHandler = (banknote: FilterType) => {
        setFilter(banknote)
    }

    return (
        <NewComponent currentMoney={currentMoney} callBack={(filter: FilterType) => onClickFilterHandler(filter)}/>
    );
};

export default Microtask5;