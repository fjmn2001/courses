import "./effects.css"
import {useForm} from "../../hooks/useForm";
import {FormEvent} from "react";

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    // @ts-ignore
    const {name, email, password} = formValues

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(formValues)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form with custom Hook</h1>
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

            <div className={'form-group'}>
                <input
                    type="password"
                    name={'password'}
                    value={password}
                    onChange={handleInputChange}
                    className={'form-control'}
                    placeholder={'***'}
                    autoComplete={'off'}
                />
            </div>

            <button type={"submit"} className={'btn btn-primary'}>Save</button>
        </form>
    )
}
