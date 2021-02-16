import {ChangeEvent} from "react";

type PropsType = {
    name: string
    value: number
    setValue: (value: number) => void
    error: string
}


const Input = (props: PropsType) => {
    const { name, setValue, value, error } = props
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
    }

    return (
        <div className='item'>
            <span >{name}</span>
            <input type="number"
                   min='-1'
                   className={error ? 'inputError' : 'input'}
                   onChange={onChangeHandler} />
        </div>
    )
}

export default Input;