import { Link } from "react-router-dom";
import "./topbar.css"


export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
           
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-tiktok"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" style={{textDecoration:"none", color:"inherit"}}>HOME</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/">ABOUT COMPANY</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>

            </div>
            <div className="topRight"> 
            {user ? (
                 <img className="topImg" src="assets/profile.jpg" alt=""/>
                
            ): (
                <ul className="topList">
                    <li className="topListItem"> 
                    <Link className="link" to="/login" >LOGIN</Link>
                    </li>
                    <li className="topListItem">
                         <Link className="link" to="/register" >REGISTER</Link>
                         </li>
                </ul>
            )
            
        
                 }
           
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
            
        </div>
    )
}

