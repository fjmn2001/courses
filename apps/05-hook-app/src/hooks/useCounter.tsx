import {useState} from "react";

export const useCounter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState)

    const increment = (multiply: number) => setCounter(counter + multiply)
    const decrement = (multiply: number) => setCounter(counter - multiply)
    const reset = () => setCounter(initialState)

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
