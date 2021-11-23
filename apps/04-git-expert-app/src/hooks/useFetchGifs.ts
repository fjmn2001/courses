import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(category).then(gifts => {
            setState({
                data: gifts,
                loading: false
            })
        })
    }, [category])

    return state
}