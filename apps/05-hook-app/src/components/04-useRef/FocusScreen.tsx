import "./ref.css"
import React, {useRef} from "react";

export const FocusScreen = () => {
    const inputRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null)

    function handleClick() {
        inputRef?.current?.select()
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input
                type="text"
                ref={inputRef}
                className={'form-control'}
                placeholder={'Your name'}
            />

            <button
                className={'btn btn-outline-primary mt-5'}
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    )
}
