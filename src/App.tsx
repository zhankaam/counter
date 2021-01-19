import React, {useState} from 'react';
import './App.css'
import {Count} from "./Components/Count";
import {Buttons} from "./Components/Buttons";


export type WarningType = `enter value and press 'set'` | `Incorrect value!`

type getValueType = string | null
export let getMinValue: getValueType = localStorage.getItem('min')
export let getMaxValue: getValueType = localStorage.getItem('max')

function App() {
    /*let [maximumValue, setMaximumValue] = useState<number>(Number(getMaxValue))
    let [startValue, setStartValue] = useState<number>(Number(getMinValue))
    let [warning,setWarning] = useState<WarningType>(`enter value and press 'set'`)
    const [activeMaxValue, setActiveMaxValue] = useState<boolean>(true)
    const [activeMinValue, setActiveMinValue] = useState<boolean>(true)
    const [display, setDisplay] = useState<number>(1)*/
    let [count, setCount] = useState<number>(0)
    let maxValue = 5


    /*const setInterface = () => {
        setCount(startValue)
        setActiveMinValue(false)
        setActiveMaxValue(false)
        localStorage.setItem('max', maximumValue.toString())
        localStorage.setItem('min', startValue.toString())
        display === 1 ? setDisplay(2) : setDisplay(1)
    }

let incrementFunction = () => {
    (count >= startValue &&  count <= maximumValue) && setCount(count + 1)
}*/

    let increment = () => {
        if (maxValue === count) {
            return
        }
        setCount(count + 1)
    }

    let reset = () => {
        setCount(0)
    }

   /* let disabledButton = (count: number) => {
        return !(maximumValue && startValue >= 0 && maximumValue >
            startValue && maximumValue !== startValue && maximumValue > 0 && startValue >= 0 )
    }

    let disabledIncButton = (count: number) => {
        return !(count >= 0 && count < maximumValue && count >= startValue && (!activeMaxValue && !activeMinValue));
    }
    const disabledResButton = (count: number) => {
        return count <= 0;
    }*/

   /* return (<div className={"App"}>
        {display === 1 ?

        }
*/



     return   <div className={"App-wrapper"}>
            <div className={"App-wrapperCount"}>
                <Count count={count}
                />
                </div>
            <div className={"App-wrapperButton"}>
                <Buttons
                    count={count}
                    increment={increment}
                    reset={reset}
                    maxValue={maxValue}
                />
            </div>
        </div> }


export default App;
