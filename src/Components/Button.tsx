import React from 'react';

type ButtonPropsType = {
    title: string
    onClick: () => void
    disabled: boolean
}

const Button = (props: ButtonPropsType) => {

    return <button className='button' onClick={props.onClick} disabled={props.disabled}>
        {props.title}
    </button>
}

export default Button