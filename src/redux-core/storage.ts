import { applyMiddleware, combineReducers, createStore } from "redux";
import dataReducer from "./reducers/dataReducer.ts";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";


const rootReducer = combineReducers({
    data: dataReducer,
})

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store;