import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';

function Header() {
    // const [ checkUser, setCheckUser ] = useState([]) 

    // useEffect(() => {
    //     const checkUser = fetch('http://localhost:3000/ifuser')
    //     .then(res => res.json())
    //     .then(data => setCheckUser(data))
    // }, [])

    const user = JSON.parse(localStorage.getItem("auth"));

    function logoutHeandler() {
        localStorage.removeItem("auth");
    }

    return (
        <div className='headersss'>
            {user ? 
               ( <div>
                    <Link to='/'>Home</Link>
                    <span> ~ ~|~ ~ </span>
                    <Link to='/profile'>пользователь {user?.name}</Link>
                    <span> ~ ~|~ ~ </span>
                    <Link to='/login' onClick={logoutHeandler}>Logout</Link>
                </div>) : 
                (<div>
                    <Link to='/'>Home</Link>
                    <span> ~ ~|~ ~ </span>
                    <Link to='/registration'>Register</Link>
                    <span> ~ ~|~ ~ </span>
                    <Link to='/login'>Login</Link>
                </div>)
            }
            <hr />
            <Outlet />
        </div>
    )
}

export default Header
    