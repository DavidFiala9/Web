import React, { useState } from "react";

export const Register = (props) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (
        <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email" id="email" name="email"/>

            <label htmlFor="username">Username</label>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="username" placeholder="Enter Username" id="username" name="username"/>

            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>

            <button type="submit">Login</button>
            
            <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </form>
    </div>
    )
}