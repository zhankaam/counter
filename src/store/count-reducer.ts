

let initialState = {
    count: 0,
    startValue: 0,
    maxValue: 1,
    error: null as string | null
}

export const countReducer = (state:InitialStateType = initialState,action: ActionsType) => {
   switch(action.type){
       case "COUNTER/SET_COUNT":
           return {
           ...state,
           count: state.count + 1
       }
       case "COUNTER/SET_START_VALUE":
           return {
               ...state,
               count: state.startValue
           }
       case "COUNTER/SET_MAX_VALUE":
           return {
               ...state,
               count: state.maxValue
           }
       case "COUNTER/SET_ERROR":
           return {
               ...state,
               count: state.error
           }
       default: {
           return state
       }
   }
}

export const setCount = (count: number) => ({type: 'COUNTER/SET_COUNT', payload: {count}} as const )
export const setStartValue = (startValue: number) => ({type: 'COUNTER/SET_START_VALUE', payload: {startValue}} as const )
export const setMaxValue = (maxValue: number) => ({type: 'COUNTER/SET_MAX_VALUE', payload: {maxValue}} as const )
export const setError = (error: string | null) => ({type: 'COUNTER/SET_ERROR', payload: {error}} as const )

export type ActionsType = ReturnType<typeof setCount> | ReturnType<typeof setStartValue> | ReturnType<typeof setMaxValue> | ReturnType<typeof setError>
export type InitialStateType = typeof initialState
