import React from "react"

const UserDetails = ({user}) => {
    return(
        <>
            <h3>User Details:</h3>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <hr />
        </>
    )
}

export default UserDetails