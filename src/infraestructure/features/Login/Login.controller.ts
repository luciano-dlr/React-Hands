import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleSingIn } from "../../hooks/Login/useGoogleSingIn";
import { useLoginEmailPassword } from "../../hooks/Login/useLoginEmailPassword";
import { toast } from "react-toastify";

export const useLoginController = () => {

  const {authenticateUserWithEmailAndPassword, error } = useLoginEmailPassword()
  
  const { onGoogleSignIn } = useGoogleSingIn()
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  
  
  const navigate =  useNavigate ()
  
  const handleClickCreateAccount = () =>{
    navigate('/auth/register')
  }
  
  const handleGoogleSingIn = () => {
    
    onGoogleSignIn()
    
  }
  
  const handleClickLoginWithEmailAndPassword = () =>{
    
    authenticateUserWithEmailAndPassword(email,password)
  }
  
  const notify = () =>{
    toast.error('Error Credentials',
    {
      autoClose:3000,
      // icon:,
      theme:"dark",
      position:"bottom-right"
    })
  }

  // UseEffect es un hook de react que ejecuta una function ( callback ) cada vez que cambia alguna dependencia del array de dependencia 
  useEffect(() => {
    if(error){
      notify()
    }
  }, [error])


  return {
    email,
    setEmail,
    password, 
    setPassword,
    handleClickCreateAccount,
    handleGoogleSingIn,
    handleClickLoginWithEmailAndPassword
  }
  
}
