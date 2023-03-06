import React, {FC, useState, ChangeEvent} from 'react';

type FullInputPropsType = {
    addNewMessage: (newMessage: string) => void
}

export const FullInput: FC<FullInputPropsType> = (props) => {

    const{addNewMessage} = props

    const[newMessage, setNewMessage] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewMessage(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        const newMessagePrepared = newMessage.trim()
        addNewMessage(newMessagePrepared)
        setNewMessage('')
    }

    return (
        <div>
            <input onChange={onChangeInputHandler} placeholder="Введите новое сообщение" value={newMessage}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};