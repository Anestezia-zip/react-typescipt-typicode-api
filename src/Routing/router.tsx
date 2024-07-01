import { Outlet, createBrowserRouter } from "react-router-dom";
import MainPage from "./MainPage.tsx";
import LoginPage from "./LoginPage.tsx";
import { AppRoutes } from "./AppRoutes.js";
import Navbar from "./Navbar.tsx";
import PostComponent from "../components/Posts/PostComponent.tsx";
import StateLiftingApp from "../components/Users/state-lifting/StateLiftingApp.tsx";
import { PrivateRoute, PublicRoute } from "../HOC/PrivateRoute.js";
import User from "./User.tsx";
import Todos from "../redux-core/components/Todos.tsx"
import Albums from "../redux-core/components/Albums.tsx";
import Comments from "../redux-core/components/Comments.tsx";
import { FC } from "react";
import React from "react";

const AppLayout: FC = () => {
    return(
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement:  <h1>Ooooooops, wrong route</h1>,
        children:[
            {
                path: AppRoutes.MAIN,
                element: <MainPage/>
            },
            {
                path: AppRoutes.LOGIN,
                element: <PublicRoute Component={LoginPage}/>
            },
            {
                path: AppRoutes.USERS,
                element: <PrivateRoute Component={StateLiftingApp}/>,
                children: [
                    {
                        path: AppRoutes.USERID,
                        element: <User/>
                    }
                ]
            },
            {
                path: AppRoutes.POSTS,
                element: <PrivateRoute Component={PostComponent}/>,
                children: [
                    {
                        path: AppRoutes.INFO,
                        element: <h1>Info under route /posts/info</h1>
                    }
                ]
            },
            {
                path: AppRoutes.TODOS,
                element: <PrivateRoute Component={Todos}/>
            },
            {
                path: AppRoutes.ALBUMS,
                element: <PrivateRoute Component={Albums}/>
            },
            {
                path: AppRoutes.COMMENTS,
                element: <Comments />
            }
        ]
    }
])