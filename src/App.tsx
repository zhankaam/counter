import React, {ChangeEvent, useState} from 'react';
import './App.css'
import {Count} from "./Components/Count";
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

    return (<div className={"App"}>
        <Display setStartValue={setStartValue}
                 setMaxValue={setMaxValue}
                 startValue={startValue}
                 maxValue={maxValue}
                 error={error}
                 setError={setError}
                 setCount={setCount}/>
        <Count inc={inc}
               reset={reset}
               count={count}
               maxValue={maxValue}
               startValue={startValue}
               error={error}  />
    </div>)

}
export default App
