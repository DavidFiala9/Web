import React, {useState} from "react";
import { Login } from "./login";
import { Register } from "./register";

export function LogRegPage() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div>
            {
                currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
            }
        </div>
    );
}