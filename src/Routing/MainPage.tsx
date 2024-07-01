import { Link } from "react-router-dom"
import { AppRoutes } from "./AppRoutes"
import React from "react"

const MainPage = () => {
  return (
    <div style={{padding: '20px'}}>
        <h1>Main page</h1>
        <h3>
            <Link to={AppRoutes.LOGIN}>Login</Link> to proceed
        </h3>
    </div>
  )
}

export default MainPage