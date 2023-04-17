import React, { useState } from "react";


export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type="username" placeholder="Enter Username" id="username" name="username"/>

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>

                <button type="submit">Login</button>

                <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            </form>
        </div>
    );
}