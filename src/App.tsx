import React from 'react';
import './App.css';
import {Header} from "./microtask-1/Header";
import {Body} from "./microtask-1/Body";
import {Footer} from "./microtask-1/Footer";
import {NewComponent} from "./microtask-2/NewComponent";
import {NewComponent2} from "./microtask-2/NewComponent-2";
import {Button} from "./microtask-3/Button";
import {Header1} from "./microtask-4/microtask-4";
import {Money} from "./microtask-5/microtask-4";
import {Input} from "./microtask-6/Microtask-6";

function App() {

    // microtask-1

    let students = [
        {id: 0, name: 'James', age: 48},
        {id: 1, name: 'Robert', age: 31},
        {id: 3, name: 'John', age: 24},
    ];

    // microtask-2

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

    const Button1Foo = (subscriber: string, age: number, adress: string) => {
        console.log(subscriber, age, adress)
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3Foo = () => {
        console.log('Im stupid button')
    }

    return (
        <div className='App-Wrapper'>
            <h1>Microtasks</h1>
            <h2>Microtask-1</h2>
            <Header titleForHeader={'NewHeader'}/>
            <Body titleForBody={'NewBody'}/>
            <Footer titleForFooter={'NewFooter'}/>
            <h2>Microtask-2</h2>
            <NewComponent students={students}/>
            <NewComponent2 topCars={topCars1}/>
            <h2>Microtask-3</h2>
            <div>
                <Button name={'MyYoutubeChanel-1'} callback={() => Button1Foo('Im vadim', 21, 'live in minsk')}/>
                <Button name={'MyYoutubeChanel-2'} callback={() => Button2Foo('Im gosha')}/>
                <Button name={'Im stupid button'} callback={Button3Foo}/>
            </div>
            <h2>Microtask-4</h2>
            <Header1/>
            <h2>Microtask-5</h2>
            <Money/>
            <h2>Microtask-6</h2>
            <Input/>
        </div>
    );
}

export default App;
