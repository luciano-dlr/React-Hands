import { useGoogleSingIn } from "../../hooks/Login/useGoogleSingIn"
import GoogleButton from 'react-google-button';


export const Login = () => {


    const {onGoogleSignIn} = useGoogleSingIn()


    const handleGoogleSingIn = () => {

        onGoogleSignIn()
        
    }

  return (
    <div>
        <GoogleButton onClick={handleGoogleSingIn} type="light" />
        {/* <button onClick={handleGoogleSingIn}>Google ingresa papa</button> */}
    </div>
  )
}

