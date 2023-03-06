import React, {useState} from 'react';
import {FullInput} from "./components/FullInput";

const Microtask6 = () => {

    const[message, setMessage] = useState<{message: string}[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addNewMessage = (newMessage: string) => {
        setMessage([{message: newMessage}, ...message])
    }

    return (
        <div>
            <FullInput addNewMessage={addNewMessage}/>
            {message.map((m, index) => <div key={index}>{m.message}</div>)}
        </div>
    );
};

export default Microtask6;