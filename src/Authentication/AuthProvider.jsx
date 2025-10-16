import React from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signinUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createUser,
        signinUser
    }
    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;