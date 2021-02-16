import React from "react";
import Button from "./Button";
import Scoreboard from "./Scoreboard";

type CountPropsType = {
    count: number
    inc: () => void
    reset: () => void
    maxValue: number
    startValue: number
    error: string
}

export function Count(props: CountPropsType) {


    return (
        <div className={"s.interface"}>
           <div>
          <Scoreboard count={props.count} maxValue={props.maxValue} error={props.error}/>
           </div>
            <div>
               <Button title={'inc'} onClick={props.inc} disabled={props.count === props.maxValue || props.error !== ''}/>
               <Button title={'reset'} onClick={props.reset} disabled={props.count === props.startValue || props.error !== ''}/>

            </div>
        </div>
    )
}




