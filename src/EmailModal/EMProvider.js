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
    const closeModalAction = () => {
        setNewState({
            ...newState,
            openModal: false
        })
    }
    const [newState, setNewState] = useState({
        openModal: false,
        openModalAction,
        closeModalAction,

    })

    return(
        <StateContext.Provider value={newState}>
            {children}
        </StateContext.Provider>
    )
}