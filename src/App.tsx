import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";


function App() {
    return (
        <>
            <Header titleForHeader={'NewHeader'}/>
            <Body titleForBody={'NewBody'}/>
            <Footer titleForFooter={'NewFooter'}/>
        </>
    );
}

export default App;
