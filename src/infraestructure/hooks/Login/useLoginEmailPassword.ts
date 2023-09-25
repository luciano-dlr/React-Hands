import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import useAuthStore from "../../zustand/auth/useAuthStore";

export const useLoginEmailPassword = () => {

    const [data, setData] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>();
    const [error, setError] = useState<any>(null);

    const {setUser} = useAuthStore()

    const authenticateUserWithEmailAndPassword = (email: string, password: string) => {
        setIsLoading(true)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setData(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
                setError(error)
            });
    }
    return {
        authenticateUserWithEmailAndPassword,
        isLoading,
        data,
        error
    }
}
