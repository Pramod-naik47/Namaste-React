import { useState, useContext } from "react";
import Title  from "./Title";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";


export const Header = () => {
    const{user}  = useContext(UserContext);
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
            <h3 style={{color: "black"}}>{user.name}</h3>
            {
             isLoggedin ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : 
             <button onClick={() => setIsLoggedIn(true)}>Login</button> 
            }
        </div>
    )
}