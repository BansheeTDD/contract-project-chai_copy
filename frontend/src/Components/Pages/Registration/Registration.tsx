import { useEffect, useState } from 'react'
import Navbar from "../../common/Header/Header"
import './Registration.css';


function Registration(): JSX.Element {

    const [ inputName, setInputName ] = useState<string>('')
    const [ inputEmail, setInputEmail ] = useState<string>('')
    const [ inputPassword, setInputPassword ] = useState<string>('')
        
    async function register(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()
        const newUser = {
            name: inputName,
            email: inputEmail,
            password: inputPassword
        }

        const response = await fetch('http://localhost:3000/reg', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("auth", JSON.stringify(data));

            setInputName('')
            setInputEmail('')
            setInputPassword('')
            window.location.assign('/')
        }

    }

    
    return (
        <>
            <Navbar/>
            <div className="reg-form-title">Регистрация</div>
            <form onSubmit={register} name="registration-form" id="registration-form">
                <input value={inputName} onChange={(e) => setInputName(e.target.value)} type="text" name="name" placeholder="name"/>
                <input value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} type="text" name="email" placeholder="email"/>
                <input value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} type="text" name="password" placeholder="password"/>
                <input id='submAuth' type="submit" value={"Зарегистрироваться"}/>
            </form>
        </>
    )
}

export default Registration