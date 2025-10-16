import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { toast } from "react-toastify";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user with email and password
  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // current user
  const unSubscribe = useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unSubscribe;
  }, []);

//   sign out
const logout = () => {
    signOut(auth)
.then(result => {
    console.log(result)
    toast.info('Logout successfully')
})
.catch(error => {
    console.log(error.message)
    toast.error(error.message)
})
}

  // this will go in other route
  const authInfo = {
    createUser,
    signinUser,
    user,
    logout,
  };
  return (
    <div>
      <AuthContext value={authInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
