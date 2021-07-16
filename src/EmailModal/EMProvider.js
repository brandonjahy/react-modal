import React, {useContext, useState} from 'react'


export const StateContext = React.createContext();

export function useStateContext(){
    return useContext(StateContext)
}

export function EMProvider({children}){
    const [newState, setNewState] = useState({
        openModal: false
    })

    return(
        <StateContext.Provider value={newState}>
            {children}
        </StateContext.Provider>
    )
}