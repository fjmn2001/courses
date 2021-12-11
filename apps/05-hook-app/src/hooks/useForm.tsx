import {ChangeEvent, ChangeEventHandler, useState} from "react";

export const useForm = (initialState: Object = {}): [Object, ChangeEventHandler] => {

    const [values, setValues] = useState(initialState)

    const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values, ...{
                [target.name]: target.value
            }
        })
    }

    return [
        values,
        handleInputChange
    ]
}
