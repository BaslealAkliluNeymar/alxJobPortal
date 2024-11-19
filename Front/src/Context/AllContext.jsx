import { createContext,useRef,useState } from 'react'

export const AllContext = createContext()


export const AllContextProvider = ({ children }) =>{
    // const user = useRef({})
    const [user, setUser] = useState({})
    
    const login = (userData) =>{
        localStorage.setItem('token',userData.token)
        const user  = localStorage.setItem('user',JSON.stringify({
            user:userData.user,
            email:userData.email,
            role:userData.role
        }))
        setUser(user)
        
    }

    const logout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    return (
        <AllContext.Provider value={{ user,login, logout}}>
            {children}
        </AllContext.Provider>
    )
}