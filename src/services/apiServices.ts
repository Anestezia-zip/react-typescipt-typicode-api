import axios from "axios";
import { dataActions } from "../redux-core/actions/dataActions.ts";
import { Album, Post, Todo, Comment } from "../interfaces/interfaces.ts";
import { AppDispatch } from "../redux-core/storage.ts";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',  
})

export const PostServices = {
    getPosts: async (dispatch: AppDispatch): Promise<void> => {
        try {
            let res = await instance.get<Post[]>('posts');
            dispatch(dataActions.setPosts(res.data)); 
        } catch {}
    },
    getAlbums: async (dispatch: AppDispatch): Promise<void> => {
        try {
            let res = await instance.get<Album[]>('photos');
            dispatch(dataActions.setAlbums(res.data)); 
        } catch {}
    },
    getTodos: async (dispatch: AppDispatch): Promise<void> => {
        try {
            let res = await instance.get<Todo[]>('todos');
            dispatch(dataActions.setTodos(res.data));
        } catch {}
    },
    getComments: async (dispatch: AppDispatch) => {
        try {
            let res = await instance.get<Comment[]>('comments');
            dispatch(dataActions.setComments(res.data));
        } catch {}
    }
}