import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export const useCreateAccount = () => {

    const [data, setData] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>();
    const [error, setError] = useState<any>(null);

    const createUser = (email: string, password: string) => {
        setIsLoading(true)
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('userCredential',userCredential)
                const user = userCredential.user;
                setData(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('error code',errorCode)
                console.log('errorMessage',errorMessage)
                setError(error)
            });
    }

    return {
        createUser,
        data,
        isLoading,
        error
    }

}
