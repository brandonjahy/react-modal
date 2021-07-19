import React, {useContext, useState} from 'react'


export const StateContext = React.createContext();

export function useStateContext(){
    return useContext(StateContext)
}

export function EMProvider({children}){
    const openModalAction = () => {
        setNewState({
            ...newState,
            openModal: true
        })
    }
    const [newState, setNewState] = useState({
        openModal: false,
        openModalAction,
        
    })

    return(
        <StateContext.Provider value={newState}>
            {children}
        </StateContext.Provider>
    )
}