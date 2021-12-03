import "./effects.css"
import {ChangeEvent, useEffect, useState} from "react";
import {Message} from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })
    const {name, email} = formState

    useEffect(() => {
        console.log('ddd 2')
    }, [formState])

    const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState, ...{
                [target.name]: target.value
            }
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className={'form-group'}>
                <input
                    type="text"
                    name={'name'}
                    value={name}
                    onChange={handleInputChange}
                    className={'form-control'}
                    placeholder={'Your name'}
                    autoComplete={'off'}
                />
            </div>

            <div className={'form-group'}>
                <input
                    type="email"
                    name={'email'}
                    value={email}
                    onChange={handleInputChange}
                    className={'form-control'}
                    placeholder={'Your email'}
                    autoComplete={'off'}
                />
            </div>

            {(name === '123') && <Message/>}
        </>
    )
}
