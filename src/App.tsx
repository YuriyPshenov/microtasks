import React from 'react';
import './App.css';
import {Header} from "./microtask-1/Header";
import {Body} from "./microtask-1/Body";
import {Footer} from "./microtask-1/Footer";
import {NewComponent} from "./microtask-2/NewComponent";
import {NewComponent2} from "./microtask-2/NewComponent-2";



function App() {
    let students = [
        {id: 0, name: 'James', age: 48},
        {id: 1, name: 'Robert', age: 31},
        {id: 3, name: 'John', age: 24},
    ];

    const topCars1 = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
    ]


    return (
        <>
            {/*<Header titleForHeader={'NewHeader'}/>*/}
            {/*<Body titleForBody={'NewBody'}/>*/}
            {/*<Footer titleForFooter={'NewFooter'}/>*/}
            {/*<NewComponent students={students}/>*/}
            <NewComponent2 topCars={topCars1} />
        </>
    );
}

export default App;
