import { useGoogleSingIn } from "../../hooks/Login/useGoogleSingIn"
import GoogleButton from 'react-google-button';
import { Input } from '../../components/Input/Input';
import { useState } from "react";
import { AccountCircle, Navigation, Password } from "@mui/icons-material";
import { Box, Button, Card, Container, Grid, Paper } from "@mui/material";

//test base dedatos firebase cloud
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/config/firebaseConfig";
import { useNavigation, Navigate, useNavigate } from 'react-router-dom';

export const Login = () => {

  //testing boton animation
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const { onGoogleSignIn } = useGoogleSingIn()
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');



  const navigate =  useNavigate ()



  // test firebase cloud
  setDoc(doc(db, "cities", "LA"), {
    name: "nachitos company",
    state: "CA coscu bro",
    country: "USA"
  });




  const handleClickCreateAccount = () =>{
    navigate('/auth/register')
  }

  const handleGoogleSingIn = () => {

    onGoogleSignIn()

  }

  return (

    <Box width={'40%'} height={'100vh'} display={"flex"} justifyContent={'center'} alignItems={'center'} style={{ backgroundColor: 'gray' }}>
      <Grid container spacing={4} alignItems="center" flexDirection="column">
        <Grid item>
          <Input inputState={email} setInputState={setEmail} label='Email' endIcon={<AccountCircle />} variant='outlined' />
        </Grid>
        <Grid item>
          <Input inputState={password} setInputState={setPassword} label='contraseña' variant='outlined' />
        </Grid>

        <Grid item>
          <GoogleButton onClick={handleGoogleSingIn} type="light" />
        </Grid>
        <Button
          variant="contained"
          onClick={handleClickCreateAccount}

        >
          Crear cuenta
        </Button>
      </Grid>
    </Box>

  )
}





// Pasos

//Maquetear el login y registro
//Atomizar el componente registro 
