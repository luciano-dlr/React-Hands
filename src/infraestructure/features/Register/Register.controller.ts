import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateAccount } from "../../hooks/Register/useCreateAccount";

export const useRegisterController = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { createUser } = useCreateAccount()
    const navigate = useNavigate()

    const handleClickNavigate = () => {
        navigate('/auth/login')
    }

    const handleClickCreateUser = () =>{
        createUser(email,password)
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        createUser,
        handleClickNavigate,
        handleClickCreateUser
    }
}