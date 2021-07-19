import React, {useContext, useState} from 'react';
import Cookies from 'js-cookie';


export const StateContext = React.createContext();

export function useStateContext(){
    return useContext(StateContext)
}

export function EMProvider({children}){
    const [modalOpen, setModalOpen] = useState(false)
    const openModalAction = () => {
        Cookies.set('modalOpenedBefore', true, {expires: 7})
        setModalOpen(true)
    };
    const closeModalAction = () => {
        setModalOpen(false)
    };
    const [email, setEmail] = useState('')
    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    };
    return(
        <StateContext.Provider value={{modalOpen, email, handleEmailInput, openModalAction, closeModalAction}}>
            {children}
        </StateContext.Provider>
    );
}