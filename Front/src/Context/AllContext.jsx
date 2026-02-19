import { User2Icon } from 'lucide-react'
import { createContext, useRef, useState } from 'react'

export const AllContext = createContext()


export const AllContextProvider = ({ children }) => {
    // const user = useRef({})
    const [user, setUser] = useState({})
    // console.log(user)
    const login = (userData) => {
        localStorage.setItem('token', userData.token)
        const userObj = {
            user: userData.user,
            email: userData.email,
            role: userData.role,
            _id: userData._id
        };
        localStorage.setItem('user', JSON.stringify(userObj))
        setUser(userObj)
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    return (
        <AllContext.Provider value={{ user, login, logout }}>
            {children}
        </AllContext.Provider>
    )
}