import { useEffect } from "react";
import { createContext, useReducer } from "react"
import Reducer from "./Reducer";

function getLocalStorageItem(item,json=false){
    var dataStored = localStorage.getItem(item)
    if (dataStored !== undefined || null || ''){
        if(json===false){return dataStored}
        else{return JSON.parse(dataStored)}
    }else{return null}
}


const INITIAL_STATE = {
    user: getLocalStorageItem('user'),
    isFetching:false,
    error:false,
}

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    return (
        <Context.Provider value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
            }}>
            {children}
        </Context.Provider>
    )
}