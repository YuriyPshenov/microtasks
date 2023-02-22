import React from 'react';
import {Button} from "./Button";


export const Microtask3 = () => {

    const buttonFoo1 = (subscriber: string, age?: number) => {
        if (age) {
            console.log(`${subscriber} ${age}`)
        } else {
            console.log(`${subscriber}`)
        }
    }

    const buttonFoo2 = (subscriber: string) => {
        console.log(`${subscriber}`)
    }

    const buttonFoo3 = (message: string) => {
        console.log(message)
    }

    const buttonFoo4 = (message: string) => {
        console.log(message)
    }

    return (
        <div>
            <Button name="MyYoutubeChannel-1" callBack={() => buttonFoo1('Hello Vasya', 24)}/>
            <Button name="MyYoutubeChannel-2" callBack={() => buttonFoo2('Hello Ivan')}/>
            <Button name="Delete" callBack={() => buttonFoo3('Someone has been deleted')}/>
            <Button name="Stupid button" callBack={() => buttonFoo4(`I'm stupid button :)`)}/>
        </div>
    );
};