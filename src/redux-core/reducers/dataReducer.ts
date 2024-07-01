import { InitialState } from "../../interfaces/interfaces";
import { dataActionTypes, dataActions } from "../actions/dataActions.ts"
import { PropertiesTypes } from "../storage";

const initialState: InitialState = {
    posts: [],
    todos: [],
    albums: [],
    comments: [],
}

export type DataActionsType = ReturnType<PropertiesTypes<typeof dataActions>>

const dataReducer = (state=initialState, action: DataActionsType): InitialState => {
    switch(action.type){
        case dataActionTypes.SET_POSTS:
            return { ...state, posts: action.payload };
        case dataActionTypes.SET_TODOS:
            return { ...state, todos: action.payload };
        case dataActionTypes.SET_ALBUMS:
            return { ...state, albums: action.payload };
        case dataActionTypes.SET_COMMENTS:
            return { ...state, comments: action.payload };
        case dataActionTypes.DELETE_POST_BY_ID:
            return { 
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload)
            }
        case dataActionTypes.TOGGLE_TODO_COMPLETION:
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.payload 
                    ? { ...todo, completed: !todo.completed }
                    : todo
                )
            }
        default:
            return state
    }
}

export default dataReducer
