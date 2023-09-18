import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useAuthStore from "../../zustand/auth/useAuthStore";

export const useGoogleSingIn = () => {

  const {setUser} = useAuthStore()
  const auth = getAuth();
  const provider = new GoogleAuthProvider()

  const onGoogleSignIn = () => {

      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(JSON.stringify(user,null,4))
          
          setUser(user) 
          // IdP data available using getAdditionalUserInfo(result)
          // ...
          console.log('soy un token',token)
          console.log('soy un user',user)

        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });

  }
  return {
      onGoogleSignIn
  }
}
