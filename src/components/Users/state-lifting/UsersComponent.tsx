import { useState, useEffect } from "react";
import User from "./User.tsx";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../Routing/AppRoutes";
import React from "react";
import { IUser } from "../../../interfaces/interfaces";
import axios from "axios";

const UsersComponent = (props) => {
  const [users, setUsers] = useState<IUser[]>([]);

  const navigate = useNavigate();
  const handleClick = (userId: number) => navigate(AppRoutes.USERS + '/' + userId)

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      let [usersRes, randomUsersRes] = await Promise.all([
        axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users"),
        axios.get("https://randomuser.me/api/?results=10")
      ])

      const usersData = usersRes.data;
      const randomUsersData = randomUsersRes.data.results;

      const usersWithPhoto = usersData.map((user, index) => ({
        ...user,
        photoUrl: randomUsersData[index]?.picture.thumbnail || 'default photo url'
      }))
      setUsers(usersWithPhoto);
    } catch {}
  };

  return (
    <>
        {users.map(user => {
            const userPosts = props.posts.filter(post => post.userId === user.id)
            return(
                <User 
                  key={user.id} 
                  user={user} 
                  posts={userPosts} 
                  handleClick={() => handleClick(user.id)}
                />
            )
        })}
    </>
  );
};

export default UsersComponent;
