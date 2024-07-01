import "../../../App.css";
import { useState, useEffect, createContext, Dispatch, SetStateAction } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { IUser, Post } from "../../../interfaces/interfaces";
import React from "react";

export interface AppContextType {
    posts: Post[];
    users: IUser[];
    setPosts: Dispatch<SetStateAction<Post[]>>;
    // Разом Dispatch<SetStateAction<any[]>> означає, що це функція, 
    // яка приймає або новий масив, або функцію, що повертає новий масив, 
    // і потім оновлює стан на основі цього значення.
    deletePost: (postId: number) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

const ContextApp = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getData('https://jsonplaceholder.typicode.com/users', setUsers);
    getData('https://jsonplaceholder.typicode.com/posts', setPosts);
  }, []);

  const getData = async (url: string, setState) => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setState(data);
    } catch (e) {console.error(e)}
  };

  const deletePost = (postId: number) => {
    setPosts(currentPosts => currentPosts.filter(post => post.id !== postId));
  };

  return (
    <div className="App">
      <AppContext.Provider value={{posts, users, setPosts, deletePost}}>
        <Child2 />
        <Child1 />
      </AppContext.Provider>
    </div>
  );
};

export default ContextApp;
