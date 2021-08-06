import React, {useEffect} from "react";

import firebase from 'firebase'
import { useAppContext } from '@context/app/AppContext'

const FirebaseWrapper = ({ children }: any) => {
    const { dispatch } = useAppContext();

    useEffect(() => {
        debugger
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (!firebaseUser)
                return;
            firebaseUser.getIdToken(true).then((token) => {
                const _user = { email: firebaseUser.email, idToken: token }
                dispatch({
                    type: 'LOGIN_USER',
                    payload: {
                        'isAuthenticated' : true, 
                        "details" : _user
                    }
                })
            })
        });
    }, [])
    return (
        <>
        {children}
        </>
    )
}

export default FirebaseWrapper;