import React from "react"
import Company from "./Company"
import UserAddress from "./UserAddress"
import UserDetails from "./UserDetails"

const User = ({user}) => {
    return(
        <div style={{backgroundColor: 'lightyellow', border: '8px solid beige'}}>
            <UserDetails user={user}/>
            <UserAddress user={user}/>
            <Company user={user}/>
        </div>
    )
}

export default User