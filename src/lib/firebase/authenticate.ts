import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import {app} from '@/lib/firebase/config'

const auth = getAuth(app);
const provider = new GoogleAuthProvider()
const signIn = async () => {

    const res = await signInWithRedirect(auth, provider)
  }

  export default signIn;