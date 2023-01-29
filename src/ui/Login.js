import React, {useState} from "react";
import './Auth.css';
import { useNavigate } from 'react-router-dom';

const Login = () =>{

    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
    }

    return (
    <div className="body">
        <div className="formContainer">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}> 
 
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" name="email" id="email"/> 
            
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="******" name="password" id="password" autoComplete="true"/> 
                
                <button type="submit" onClick={() => {
                navigate("/");
                }}>Login</button>
			</form>

            <button className="link-btn" onClick={() => {
                navigate("/Register");
                }}>Don't have an account? Register Here.</button>
        </div>
    </div>
    )
}

export default Login;