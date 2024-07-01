import React from "react"
import { useState } from "react"
import '../../../App.css'


const User = ({user, posts, handleClick}) => {
    const [show, setShow] = useState(false)
    
    const togglePosts = () => setShow(!show)

    return(
        <div className="userContainer">
            <p>{user.company.bs}</p>
            <h3 onClick={handleClick} className="userTitle">{user.name}</h3>
            <p>Company: {user.company.name}</p>
            <div style={{display: 'flex'}}>
                <img className="userAvatar" src={user.photoUrl} alt="" width={65} height={50} />
                <div>
                    <span className="userEmail">{user.email}</span>
                    <button className="userButton" type="button" onClick={togglePosts}>{show ? 'Hide last post' : 'Show last post'}</button>
                </div>
            </div>
            {show && posts.map(post => (
                <div className="postsContainer" key={post.id}>
                    <p className="postTitle"><b>Title: </b>{post.title}</p>
                </div>
            ))}
            <div>
                <p className="userCatchPhrase"><i>{user.company.catchPhrase}</i></p>
            </div>
        </div>
    )
}

export default User