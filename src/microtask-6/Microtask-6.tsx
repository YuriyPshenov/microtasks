import React, {useState} from "react";
import {FullInput} from "./inputs/FullInput";
import {Button} from "./inputs/Button";
import {InputL} from "./inputs/Input";

export const Input = () => {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])


    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    let [title, setTitle] = useState('')

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <InputL title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}