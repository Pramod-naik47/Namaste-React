import React, { Suspense, lazy } from "react";
import  ReactDOM  from "react-dom/client";
import {Header}from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu";
//import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));
const AppLayout = () => {
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        errorElement : <Error/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/About",
                element : <About/>
            },
            {
                path : "/Contact",
                element : <Contact/>
            },
            {
                path : "/restaurantmenu/:id",
                element : <RestaurantMenu/>
            },{
                path : "/instamart",
                element : <Suspense> <Instamart/></Suspense>
            }

        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);