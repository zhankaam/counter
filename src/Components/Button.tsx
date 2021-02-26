import React from 'react';
import s from "./Count.module.css"

type ButtonPropsType = {
    title: string
    onClick: () => void
    disabled: boolean
}

const Button = (props: ButtonPropsType) => {

    return <button className={s.buttonSet} onClick={props.onClick} disabled={props.disabled}>
        {props.title}
    </button>
}

export default Button