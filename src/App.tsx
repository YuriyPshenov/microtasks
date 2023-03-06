import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import NewComponent from "./microtask2/NewComponent";
import {Microtask3} from "./microtask3/Microtask3";
import Microtask4 from "./microtask4/Microtask4";
import Microtask5 from "./microtask5/Microtask5";
import Microtask61 from "./microtask6/Microtask6-1";
import Microtask62 from "./microtask6/Microtask6-2";

function App() {

    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]

    return (
        <div className="appWrapper">
            <div>
                <h2>Microtask-1</h2>
                <Header title="New Header"/>
                <Body titleForBody="New Body"/>
                <Footer titleForFooter="New Footer"/>
            </div>
            <hr/>
            <div>
                <h2>Microtask-2</h2>
                <NewComponent students={students}/>
            </div>
            <hr/>
            <div>
                <h2>Microtask-3</h2>
                <Microtask3/>
            </div>
            <hr/>
            <div>
                <h2>Microtask-4</h2>
                <Microtask4/>
            </div>
            <hr/>
            <div>
                <h2>Microtask-5</h2>
                <Microtask5/>
            </div>
            <hr/>
            <div>
                <h2>Microtask-6-1</h2>
                <Microtask61/>
            </div>
            <hr/>
            <div>
                <h2>Microtask-6-2</h2>
                <Microtask62/>
            </div>
        </div>
    );
}

export default App;
