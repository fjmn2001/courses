import {useState} from "react";

export const useCounter = (initialState = 10) => {
    const [state, setState] = useState(initialState)

    const increment = (multiply: number) => setState(state + multiply)
    const decrement = (multiply: number) => setState(state - multiply)
    const reset = () => setState(initialState)

    return {
        state,
        increment,
        decrement,
        reset
    }
}
