import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication();
const Googleprovider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('')
  const auth = getAuth();

  const signInUsingGoogle = () => {

    return signInWithPopup(auth, Googleprovider)
      .then((result) => {
        setUser(result.user);
      })
    .catch (error => {
  setError(error.message);
    })
  }
  const Logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });

  }
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        
        setUser(user);
      }
      else {
        setUser({})
      }
      setIsLoading(false)
    })
  }, []);


  return {
    user,
    error,
    signInUsingGoogle,
    Logout,
    isLoading
  }
}
export default useFirebase;