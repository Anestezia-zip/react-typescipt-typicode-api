import { useEffect } from "react";
import PostItem from "./PostItem.tsx";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePostByIdThunk, getPostsThunk } from "../../redux-core/actions/dataActions.ts";
import { Post } from "../../interfaces/interfaces";
import { AppDispatch, AppStateType } from "../../redux-core/storage";
import React from "react";

const PostComponent = () => {
  const posts:Post[] = useSelector((state: AppStateType) => state.data.posts)
  const dispatch:AppDispatch = useDispatch()
  const getPosts = () => dispatch(getPostsThunk())
  const handleDeletePost = (id:number, message:(id: number) => void) => dispatch(deletePostByIdThunk(id, message))
  

  useEffect(() => {
    getPosts();
  }, []);


  return (
    <div className="postWrapper">
      <Outlet/>
      {posts.slice(0,16).map((post) => (
          <PostItem key={post.id} post={post} handleDeletePost={handleDeletePost} />
      ))}
    </div>
  );
};

export default PostComponent;
