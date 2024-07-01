import React from "react"

const Character = (props) => {
    const { user } = props
    return(
        <>
            <h3>{user.name}</h3>
            <img width={250} src={user.image} alt={`Character ${user.name}`} />
            <p>Species: {user.species}</p>
            <p>Gender: {user.gender}</p>
            <p>Status: {user.status}</p>
            <hr />
        </>
    )
}

export default Character