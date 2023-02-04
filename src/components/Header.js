import { useState } from "react";
import Title  from "./Title";

export const Header = () => {
    const [isLoggedin, setIsLoggedIn] = useState(false)
    return(
        <div  className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <ol>Home</ol>
                    <ol>About us</ol>
                    <ol>Contact us</ol>
                    <ol>Cart</ol>
                </ul>
            </div>
            {
             isLoggedin ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : 
             <button onClick={() => setIsLoggedIn(true)}>Login</button> 
            }
        </div>
    )
}