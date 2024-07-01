import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Post } from '../../interfaces/interfaces';

interface Props {
  post: Post;
  handleDeletePost: (id: number, callback: (id: number) => void) => void;
}

export const successDeletionMessage = (id:number) => alert(`Post deleted successfully with id ${id}`)

const PostItem: React.FC<Props> = ({ post, handleDeletePost }) => (
  <div className='postItem'>
    <p><b>Title:</b> {post.title}</p>
    <p style={{ width: "300px" }}>
      <b>Body:</b> {post.body}
    </p>
    <p>Post #{post.id}</p>
    <button onClick={()=>handleDeletePost(post.id, successDeletionMessage)}>Delete <FaTrash /></button>
  </div>
);


export default PostItem;
