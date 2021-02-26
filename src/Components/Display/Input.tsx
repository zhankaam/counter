import React, {ChangeEvent} from "react";
import s from "./Display.module.css"

type PropsType = {
    name: string
    value: number
    setValue: (value: number) => void
    error: string
}


const Input = (props: PropsType) => {
    const { name, setValue, error } = props
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
    }

    return (
        <div className={s.wrapper}>
            <span >{name}</span>
            <input type="number"
                   min='-1'
                   className={error ? s.inputError : s.input}
                   onChange={onChangeHandler} />
        </div>
    )
}

export default Input;