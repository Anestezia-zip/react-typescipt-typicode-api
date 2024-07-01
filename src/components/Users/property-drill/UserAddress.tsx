import React from "react"

const UserAddress = (props) => {
    return(
        <>
            <h3>User Address:</h3>
            <p>{props.user.address.street}</p>
            <p>{props.user.address.suite}</p>
            <p>{props.user.address.city}</p>
            <hr />
        </>
    )
}

export default UserAddress