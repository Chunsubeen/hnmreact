import React from 'react';
import { useNavigate } from "react-router-dom";

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate()

    const loginUser=(event)=>{
        event.preventDefault();
        setAuthenticate(true);
        navigate("/");
    }
    return (
        <div>
            <form onSubmit={(event)=>loginUser(event)} className="login">
                <h1 className="login-title">Login</h1>
                <label>ID</label>
                <input
                    name="username"
                    type="text"
                />
                <label>PASSWORD</label>
                <input
                    name="password"
                    type="password"
                />
                <div class="login-forgot">
                    <a class="login-forgot-link" href="#">Forgot Password?</a>
                </div>
                <button type="submit">login</button>
                <div class="login-signup">
                    <a class="login-signup-link" href="#">sign in</a>
                </div>
            </form>
        </div>
    )
}

export default Login
