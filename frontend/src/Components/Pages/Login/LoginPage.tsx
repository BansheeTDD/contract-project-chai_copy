import { useEffect, useState } from 'react'
import Navbar from "../../common/Header/Header"
import './LoginPage.css';


function Login(): JSX.Element {

    const [ inputEmail, setInputEmail ] = useState<string>('')
    const [ inputPassword, setInputPassword ] = useState<string>('')
    // const [ isAuth, setIsAuth ] = useState<boolean>(!!localStorage.getItem("auth"));
    
    async function login(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        try {
            event.preventDefault()
            const registeredUser = {
                email: inputEmail,
                password: inputPassword
            }
    
            // localStorage.setItem("auth", "true");
            // setIsAuth(true)
    
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                // credentials: "include",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(registeredUser),
            })
    
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("auth", JSON.stringify(data));
                
                setInputEmail('')
                setInputPassword('')
                window.location.assign('/')
            } else {
                console.log("error");
            }
        } catch (error) {
            console.log({ERRRRROR: error});
        }
    }

    return (
        <>
            <Navbar/>
            <div className="auth-form-title">Авторизация</div>
            <form onSubmit={login} name="registration-form" id="registration-form">
                <input value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} type="text" name="email" placeholder="email"/>
                <input value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} type="text" name="password" placeholder="password"/>
                <input id="submAuth" type="submit" value={"Войти"}/>
            </form>
        </>
    )
}

export default Login