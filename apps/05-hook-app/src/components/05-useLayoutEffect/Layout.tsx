import "./layoutEffect.css"
import {useFetch} from "../../hooks/useFetch";
import {useCounter} from "../../hooks/useCounter";
import React, {useLayoutEffect, useRef} from "react";

export const Layout = () => {

    const {counter, increment} = useCounter(1)
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const {data} = state

    const {quote} = !!data ? data[0] : {quote: ''}
    const pTag: React.MutableRefObject<HTMLParagraphElement | null> = useRef(null)

    useLayoutEffect(() => {
        console.log(pTag.current?.getBoundingClientRect())
    }, [quote])

    return (
        <>
            <h1>Layout Effect</h1>
            <hr/>

            <blockquote className={'blockquote text-right'}>
                <p
                    ref={pTag}
                    className={'mb-0'}
                >{quote}</p>
            </blockquote>

            <button
                className={'btn btn-primary'}
                onClick={_ => increment(1)}
            >
                Next Quote
            </button>
        </>
    )
}
