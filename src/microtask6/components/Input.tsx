import React, {ChangeEvent, FC} from 'react';

type InputPropsType = {
    value: string
    setNewMessage: (newMessage: string) => void
}

export const Input: FC<InputPropsType> = (props) => {
    const{value, setNewMessage} = props
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setNewMessage(event.currentTarget.value)
    return (
        <input value={value} onChange={onChangeHandler} placeholder={'Введите новое сообщение'}/>
    );
};