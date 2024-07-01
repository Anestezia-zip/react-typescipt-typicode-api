import React from "react";
import useFetch from "./useFetch.tsx";
import { IUser, Post, Comment } from "../../interfaces/interfaces.ts";

const UsersComponent = () => {
  const { data: users, loading: usersLoading, error: usersError } = useFetch<IUser[]>("users");
  const { data: posts, loading: postsLoading, error: postsError } = useFetch<Post[]>("posts");
  const { data: comments, loading: commentsLoading, error: commentsError } = useFetch<Comment[]>("comments");

  if (usersLoading || postsLoading || commentsLoading) return <div>Loading...</div>

  if (usersError) return <div>User error: {usersError.message}</div>
  if (postsError) return <div>Post error: {postsError.message}</div>
  if (commentsError) return <div>Comment error: {commentsError.message}</div>

  return (
    <div>
      <div>
        <h2>Users</h2>
        <ul>
          {users?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Posts</h2>
        <ul>
          {posts?.slice(0, 10).map((post) => (
            <li key={post.id}>
              <h3>Status: {post.title}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Comments</h2>
        <ul>
          {comments?.slice(0, 10).map((comment) => (
            <li key={comment.id}>
              <strong>{comment.email}</strong>: {comment.body}
            </li>
          ))}
        </ul>
      </div> 
    </div>
  );
};

export default UsersComponent;
