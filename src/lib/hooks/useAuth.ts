import {useState, useEffect} from 'react'
import {onAuthStateChanged, getAuth} from 'firebase/auth'
import {app} from '@/lib/firebase/config'
import { User } from 'firebase/auth';

const auth = getAuth(app);
const useAuth = () => {
    const [user, setUser] = useState<null | User>(null);

    useEffect(() => {
        const authDirection = onAuthStateChanged(auth, (user) => {
        if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user)
        // ...
        } else {
        // User is signed out
        setUser(null)
        }
      })

      return () => authDirection();
    
    }, [])

    return user;

}
export default useAuth
