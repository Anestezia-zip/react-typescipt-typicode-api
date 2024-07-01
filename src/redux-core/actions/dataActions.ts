import { Album, Post, Todo, Comment } from "../../interfaces/interfaces";
import { PostServices } from "../../services/apiServices.ts";
import { AppDispatch } from "../storage";

export const dataActionTypes = {
    SET_POSTS: 'SET_POSTS',
    SET_TODOS: 'SET_TODOS',
    SET_ALBUMS: 'SET_ALBUMS',
    SET_COMMENTS: 'SET_COMMENTS',
    DELETE_POST_BY_ID: 'DELETE_POST_BY_ID',
    TOGGLE_TODO_COMPLETION: 'TOGGLE_TODO_COMPLETION'
} as const;

export const dataActions = {
    setPosts: (posts: Post[]) => ({type: dataActionTypes.SET_POSTS, payload: posts} as const),
    setTodos: (todos: Todo[]) => ({type: dataActionTypes.SET_TODOS, payload: todos} as const),
    setAlbums: (albums: Album[]) => ({type: dataActionTypes.SET_ALBUMS, payload: albums} as const),
    setComments: (comments: Comment[]) => ({type: dataActionTypes.SET_COMMENTS, payload: comments} as const),
    deletePostById: (id: number) => ({type: dataActionTypes.DELETE_POST_BY_ID, payload: id} as const),
    toggleTodoCompletion: (id: number) => ({type: dataActionTypes.TOGGLE_TODO_COMPLETION, payload: id}as const)
}

export const getPostsThunk = () => (dispatch: AppDispatch) => {
    PostServices.getPosts(dispatch)
}

export const deletePostByIdThunk = (id:number, message: (id:number) => void) => (dispatch: AppDispatch) => {
    dispatch(dataActions.deletePostById(id))
    message(id)
}