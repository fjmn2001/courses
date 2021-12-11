import "./examples.css"
import {useFetch} from "../../hooks/useFetch";
import {useCounter} from "../../hooks/useCounter";

export const MultipleCustomHook = () => {

    const {counter, increment} = useCounter(1)
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const {loading, data} = state

    const {author, quote} = !!data ? data[0] : {author: '', quote: ''}

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr/>

            {
                loading ?
                    (
                        <div className={'alert alert-info'}>
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className={'blockquote text-right'}>
                            <p className={'mb-0'}>{quote}</p>
                            <footer className={'blockquote-footer'}>{author}</footer>
                        </blockquote>
                    )
            }

            <button
                className={'btn btn-primary'}
                onClick={_ => increment(1)}
            >
                Next Quote
            </button>
        </>
    )
}
