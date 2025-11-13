import React, { createContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../Firebase/firebase.config';
import Loading from '../Pages/Loading';

const googleProvider = new GoogleAuthProvider()

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup (auth, googleProvider);
  }

  const createUser = (email, password, name, photoURL) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return updateProfile(user, { displayName: name, photoURL })
        .then(() => {
          return userCredential;
        });
    })
    .finally(() => setLoading(false));
};


  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false));
  };

  const logOut = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  const authData = { 
    user,
    loading,
    signInWithGoogle,
    createUser,
    login,
    logOut,
    setLoading,
};
  return (
    <AuthContext.Provider value={authData}>
      {loading? (<Loading></Loading> ):
        children
      }
      </AuthContext.Provider>
  );
};

export default AuthProvider;

