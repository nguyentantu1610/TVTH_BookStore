import React, {createContext, useState} from 'react'
import OurStore from './pages/OurStore'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token, setToken] = useState(false)



    const state = {
        token: [token, setToken],
        ourstore: OurStore()
    }

    return (
        <GlobalState.Provider value = {state}>
            {children}
        </GlobalState.Provider>
    )
}