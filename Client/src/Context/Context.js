import { useEffect } from "react";
import { createContext, useReducer } from "react"
import Reducer from "./Reducer";

function getLocalStorageItem(item){
    var dataStored = localStorage.getItem(item)
    if (dataStored !== undefined || null || ''){ 
        return JSON.parse(dataStored)
    }else{return null}
}


const INITIAL_STATE = {
    user: getLocalStorageItem('user'),
    isFetching:false,
    error:false,
    accessToken:'',
    roles:[]
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
            accessToken:state.accessToken,
            roles:state.roles,
            dispatch
            }}>
            {children}
        </Context.Provider>
    )
}