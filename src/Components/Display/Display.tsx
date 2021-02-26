import React, {  useState, useEffect, useCallback } from 'react';
import Button from "../Button";
import Input from "./Input";
import s from './Display.module.css'

type PropsType = {
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    startValue: number
    maxValue: number
    error: string
    setError: (error: string) => void
    setCount: (value: number) => void
}

const Display = (props: PropsType) => {
    const { error, maxValue, setError, setMaxValue, setStartValue, setCount } = props

    const [minValueLocal, setMinValueLocal] = useState<number>(0);
    const [maxValueLocal, setMaxValueLocal] = useState<number>(maxValue);

    const isError = useCallback(() => {
        if (minValueLocal < 0) {
            setError( `enter value and press 'set'`)
        } else if (minValueLocal === maxValueLocal) {
            setError( `Incorrect value!`)
        } else if (minValueLocal > maxValueLocal) {
            setError(`Incorrect value!`)
        } else {
            setError('')
        }
    }, [minValueLocal, maxValueLocal, setError])

    useEffect(() => {
        isError()
    }, [minValueLocal, maxValueLocal, isError])

    const onChangeHandler = () => {
        setMaxValue(maxValueLocal)
        setStartValue(minValueLocal)
        setCount(minValueLocal)
    }

    return <div className={s.wrapper}>
        <div className={s.screen}>
            <Input name={'min value:'}
                   value={minValueLocal}
                   setValue={setMinValueLocal}
                   error={error}  />
            <Input name={'max value:'}
                   value={maxValueLocal}
                   setValue={setMaxValueLocal}
                   error={error} />
        </div>
        <div className={s.buttons}>
            <Button title={'set'}
                    onClick={onChangeHandler}
                    disabled={error !== ''} />
        </div>
    </div>
}

export default Display;