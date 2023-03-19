'use client'
import { getAuth } from "firebase/auth"
import {app} from '@/lib/firebase/config'
import {useAuthContext} from '@/lib/context/authContext'
import signIn from '@/lib/firebase/authenticate'
import {signOut} from 'firebase/auth'
const auth = getAuth(app)
const dashboard = () => {
  const { user } = useAuthContext();
  console.log(user)
  if (user != null) {
    return (
      <div>
        <h1 className="text-4xl">Admin Dashboard</h1>
        <div onClick={() => signOut(auth)}>sign out</div>
        <div>
          <h2>Edit Announcements</h2>
          {/* plus icon */}
          <ul>
            <li>Parent buletin</li>
            <li>Sporting event</li>
            <li>Alchemy</li>
            <li>Grad Photos</li>
          </ul>
        </div>
      </div>
      )

    } else {
      return (
        <button onClick={() => signIn()}>sign in</button>
      )
    }
}

export default dashboard