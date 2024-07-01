import React, { FC, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import { Post } from '../../interfaces/interfaces';

interface PostProps {
  postId: string | number;
  setShowPost: React.Dispatch<React.SetStateAction<boolean>>
}

const PostPage: FC<PostProps> = ({ postId, setShowPost }) => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data: Post) => setPost(data));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h2>Post {postId}</h2>
        <button className='postButton' type='button' onClick={()=>setShowPost(false)}>X</button>
      </div>
      <p><b>Title:</b> {post.title}</p>
      <p><b>Body:</b> {post.body}</p>
    </div>
  );
};

export default PostPage;