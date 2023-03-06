import React, {useState} from 'react';
import {Input} from "./components/Input";
import {Button} from "./components/Button";

const Microtask62 = () => {

    console.log('rerender 62')

    const[message, setMessage] = useState<{message: string}[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    const[newMessage, setNewMessage] = useState('')

    const addNewMessage = () => {
        if(newMessage) {
            setMessage([{message: newMessage}, ...message])
            setNewMessage('')
        }
    }

    return (
        <div>
            <Input value={newMessage} setNewMessage={setNewMessage}/>
            <Button name="Add message" addNewMessage={addNewMessage}/>
            {message.map((m, index) => <div key={index}>{m.message}</div>)}
        </div>
    );
};

export default Microtask62;