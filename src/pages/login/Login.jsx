import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">LOGIN</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" placeholder="Enter your email..."/>
                <label>Password</label>
                <input type="password" placeholder="Enter your password..."/>
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton"><Link className="link" to="/register">Register</Link></button>
            
        </div>
    )
}
