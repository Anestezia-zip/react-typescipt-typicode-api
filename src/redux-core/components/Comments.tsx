import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostServices } from '../../services/apiServices.ts';
import Post from './Post.tsx';
import { AppDispatch, AppStateType } from '../storage';
import { Comment } from '../../interfaces/interfaces';

const Comments = () => {
    const [post, setPost] = useState('')
    const [showPost, setShowPost] = useState(false)

    const dispatch: AppDispatch = useDispatch();
    const comments: Comment[] = useSelector((state: AppStateType) => state.data.comments)

    useEffect(() => {
       PostServices.getComments(dispatch)
    }, [dispatch]);

    const handleCommentClick = (postId) => {
        setPost(postId)
        setShowPost(true)
    }

    return (
        <div style={{ padding: "10px", display: "flex" }}>
            <div>
                <h2>Comments</h2>
                <ul>
                    {comments.slice(0, 14).map((comment) => (
                        <li className='commentItem' key={comment.id} onClick={() => handleCommentClick(comment.postId)}>
                            <p><strong>{comment.email}</strong>: {comment.body}</p>
                            <p><i>{comment.name}</i></p>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ backgroundColor: "lightseagreen", padding: "20px" }}>
                {showPost && (<Post postId={post} setShowPost={setShowPost}/>)}
            </div>
        </div>
    );
};

export default Comments;
