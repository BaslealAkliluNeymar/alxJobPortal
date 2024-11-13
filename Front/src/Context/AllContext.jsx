import { createContext,useRef,useState } from 'react'

export const AllContext = createContext()


export const AllContextProvider = ({ children }) =>{
    // const user = useRef({})

    
    const login = (userData) =>{
        localStorage.setItem('token',userData.token)
        localStorage.setItem('user',JSON.stringify({
            user:userData.user,
            email:userData.email,
            role:userData.role
        }))
        
    }

    // console.log(user)

    const logout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    return (
        <AllContext.Provider value={{ login, logout}}>
            {children}
        </AllContext.Provider>
    )
}