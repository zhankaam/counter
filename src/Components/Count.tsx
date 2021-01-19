import React from "react";
import s from "./Count.module.css"

type CountPropsType = {
    count: number
}

export function Count(props: CountPropsType) {



    return (
        <div className={"s.interface"}>
            <div className={(props.count === 5) ? s.maxValue : s.value }>
                {props.count}
            </div>
          {/*  {props.count}*/}
        </div>
    )
}