import React, {useEffect, useRef, useState} from "react";

export const useFetch = (url: string) => {
    const isMounted: React.MutableRefObject<boolean> = useRef(true)
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        setState({
            data: null,
            loading: true,
            error: null
        });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (!isMounted.current) {
                    return;
                }

                setState({
                    data,
                    loading: false,
                    error: null
                })
            })
    }, [url])

    return state
}
