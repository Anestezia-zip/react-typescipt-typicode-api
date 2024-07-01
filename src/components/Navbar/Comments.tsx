import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Post, Comment } from '../../interfaces/interfaces';

const Comments = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                setComments(res.data);
            });
    }, []);

    const handleCommentClick = (postId) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => {
                setSelectedPost(res.data);
            });
    };

    return (
        <div style={{ backgroundColor: "lightseagreen", padding: "10px" }}>
            <h2>Comments</h2>
            <div style={{display: 'flex'}}>
                <div>
                    {comments.slice(0, 15).map((comment) => (
                        <>
                            <p><strong>{comment.email}</strong>: {comment.body}</p>
                            <button key={comment.id} onClick={() => handleCommentClick(comment.postId)}>
                                <strong>Post ID: {comment.postId}</strong>
                            </button>
                        </>
                    ))}
                </div>
                {selectedPost && (
                    <div style={{ marginTop: '20px', backgroundColor: 'lightyellow', padding: '10px' }}>
                        <h3>Selected Post:</h3>
                        <p>Title: {selectedPost.title}</p>
                        <p>Body: {selectedPost.body}</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Comments;
