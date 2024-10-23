import { createContext,useState } from 'react'

export const AllContext = createContext()


export const AllContextProvider = ({ children }) =>{
    const [user , setUser] = useState(null)

    const login = (userData) =>{
        localStorage.setItem('token',userData.token)
        setUser(userData)
    }


    const logout = () =>{
        localStorage.removeItem('token')
        setUser()
    }

    return (
        <AllContext.Provider value={{ user, login, logout}}>
            {children}
        </AllContext.Provider>
    )
}