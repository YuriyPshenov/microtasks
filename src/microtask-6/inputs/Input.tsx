import React, {ChangeEvent} from "react";


type InputLPropsType = {
    title: string
    setTitle:(title: string)=>void
}

export const InputL = (props: InputLPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    )
}