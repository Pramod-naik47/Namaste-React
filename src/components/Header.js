import { useState } from "react";
import Title  from "./Title";
import { Link } from "react-router-dom";

export const Header = () => {
    const [isLoggedin, setIsLoggedIn] = useState(false)
    return(
        <div  className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <ol><Link to="/">Home</Link> </ol>
                    <ol><Link to="/about">About us</Link></ol>
                    <ol><Link to="/contact"> Contact us</Link></ol>
                    <ol>Cart</ol>
                    <ol><Link to="/instamart">Instamart</Link></ol>
                </ul>
            </div>
            {
             isLoggedin ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : 
             <button onClick={() => setIsLoggedIn(true)}>Login</button> 
            }
        </div>
    )
}