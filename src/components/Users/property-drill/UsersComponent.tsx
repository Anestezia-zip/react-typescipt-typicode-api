import React from "react"
import User from "./User"

const UsersComponent = (props) => {
    return(
        <>
            {props.users?.map((user) => (
                <User key={user.id} user={user}/>
            ))}
        </>
    )
}

export default UsersComponent