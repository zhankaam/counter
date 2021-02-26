import React from "react";
import Button from "./Button";
import Scoreboard from "./Scoreboard";
import s from "./Count.module.css"

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
        <div className={s.wrapper}>
           <div className={s.interface}>
          <Scoreboard count={props.count} maxValue={props.maxValue} error={props.error} />
           </div>
            <div className={s.button}>
               <Button title={'inc'} onClick={props.inc} disabled={props.count === props.maxValue || props.error !== ''}/>
               <Button title={'reset'} onClick={props.reset} disabled={props.count === props.startValue || props.error !== ''}/>
            </div>
        </div>
    )
}




