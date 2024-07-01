import React from "react"

const Company = (props) => {
    return(
        <>
            <h3>Company:</h3>
            <p>{props.user.company.name}</p>
            <p>{props.user.company.catchPhrase}</p>
            <p>{props.user.company.bs}</p>
            <hr />
        </>
    )
}

export default Company