import Title  from "./Title";

export const Header = () => {
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
        </div>
    )
}