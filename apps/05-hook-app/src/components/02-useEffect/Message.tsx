import {useEffect, useState} from "react";

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0})
    const {x, y} = coords

    useEffect(() => {
        const listener = ({x, y}: MouseEvent) => {
            setCoords({x, y})
        };
        window.addEventListener('mousemove', listener)

        return () => {
            window.removeEventListener('mousemove', listener)
        }
    }, [])

    return (
        <div>
            <h3>You are nice!</h3>
            <p>
                x:{x} y:{y}
            </p>
        </div>
    )
}
