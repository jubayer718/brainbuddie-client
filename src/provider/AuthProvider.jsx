import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)
   const provider= new GoogleAuthProvider()


  const handleCreateNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  } 
  
  const handleSignIn = (email, password) => {
    setLoading(true)
    return  signInWithEmailAndPassword(auth, email, password)
  }

  const handleLogOut = () => {

setLoading(true)
   return signOut(auth);
}

  const loginWithGoogle = () => {
   
 return signInWithPopup(auth,provider)
  }
  

   useEffect(() => {

    
    const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  },[])
  const authInfo = {
    user,
    setUser,
    handleLogOut,
    handleSignIn,
    handleCreateNewUser,
    loginWithGoogle,
    loading,

    
  }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;