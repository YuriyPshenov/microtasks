import React from 'react';
import './App.css';
import {Header} from "./microtask-1/Header";
import {Body} from "./microtask-1/Body";
import {Footer} from "./microtask-1/Footer";
import {NewComponent} from "./microtask-2/NewComponent";
import {NewComponent2} from "./microtask-2/NewComponent-2";
import {Button} from "./microtask-3/Button";



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
            <Header titleForHeader={'NewHeader'}/>
            <Body titleForBody={'NewBody'}/>
            <Footer titleForFooter={'NewFooter'}/>
            <NewComponent students={students}/>
            <NewComponent2 topCars={topCars1} />
            <Button name={'MyYoutubeChanel-1'} callback={() => Button1Foo('Im vadim', 21, 'live in minsk')}/>
            <Button name={'MyYoutubeChanel-2'} callback={() => Button2Foo('Im gosha')}/>
            <Button name={'Im stupid button'} callback={Button3Foo}/>
        </div>
    );
}

export default App;
