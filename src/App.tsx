import React, { useState} from 'react';
import s from './App.module.css'
import {Count} from "./Components/Count/Count";
import Display from "./Components/Display/Display";


function App() {
    let [startValue, setStartValue] = useState<number>(0)
    let [count, setCount] = useState<number>(startValue)
    let [maxValue, setMaxValue] = useState<number>(1)
    let [error,setError] = useState<string>('')


    let inc = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }

    let reset = () => {
        setCount(startValue)
    }

    return (<div className={s.container}>
        <div className={s.display}>
            <Display setStartValue={setStartValue}
                     setMaxValue={setMaxValue}
                     startValue={startValue}
                     maxValue={maxValue}
                     error={error}
                     setError={setError}
                     setCount={setCount}/>
        </div>
        <div className={s.count}>
            <Count inc={inc}
                   reset={reset}
                   count={count}
                   maxValue={maxValue}
                   startValue={startValue}
                   error={error}  />
        </div>
    </div>)

}
export default App
