'use client'

import {createContext, useContext} from 'react'
import useAuth from '@/lib/hooks/useAuth'
import { User } from 'firebase/auth';

const AuthContext = createContext<Record<string, User | null>>({user: null});

const useAuthContext = () => useContext(AuthContext)

const AuthProvider = ({children}: {children: any}) => {
    const user = useAuth();
    
    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider
export {AuthContext, useAuthContext}