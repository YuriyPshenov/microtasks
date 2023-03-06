import React, {FC} from 'react';

type ButtonPropsType = {
    name: string
    addNewMessage: () => void
}

export const Button: FC<ButtonPropsType> = (props) => {
    const{addNewMessage, name} = props
    const onClickHandler = () => addNewMessage()
    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};