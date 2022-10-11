import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";


function App() {
    return (
        <>
            <Header title={'NewHeader'}/>
            <Body title={'NewBody'}/>
            <Footer title={'NewFooter'}/>
        </>
    );
}

export default App;
