import GoogleButton from 'react-google-button';
import { Input } from '../../components/Input/Input';
import { useLoginController } from "./Login.controller";
import { InputType } from '../../components/Input/types';
import { Box, Button, ButtonBase, Grid, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

const GENERAL_BORDER_RADIUS = '12px';




export const Login = () => {
  const controller = useLoginController()
  const imageURL = "https://images.unsplash.com/photo-1478186172078-2a70949993f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80";
  const padding = "24px"
  return (
    <Box sx={{ display: "flex", width: `100vw`, height: `100vh` }}>
      <Box sx={{ padding: "32px", width: { xs: '100%', md: "50%" } }} display={"flex"} justifyContent={'center'} alignItems={'center'}>

        <Grid container alignItems="center" spacing={2} >

          <Grid item xs={12} md={12}>
            <Box textAlign={'center'}>
              <Typography fontSize={32} fontWeight={500} letterSpacing={1} color={'#4169e2'}>Welcome back</Typography>
              <Typography fontSize={18} fontWeight={400} color={'black'}>Please enter your details to Login</Typography>
            </Box>
          </Grid>

          <Grid item my={2} xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Box width={"50%"} sx={{ width: { xs: '75%', sm: '75%', md: '75%', lg: '50%' } }}>
              <Input inputState={controller.email} setInputState={controller.setEmail} label='Email' variant='outlined' borderRadius={GENERAL_BORDER_RADIUS}/>
            </Box>
          </Grid>

          <Grid item my={2} xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box width={"50%"} sx={{ width: { xs: '75%', sm: '75%', md: '75%', lg: '50%' } }}>
              <Input
                inputState={controller.password}
                setInputState={controller.setPassword}
                label='Contraseña'
                variant='outlined'
                type={InputType.PASSWORD}
                borderRadius={GENERAL_BORDER_RADIUS} />
            </Box>
          </Grid>

          <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box width={"50%"} sx={{ width: { xs: '75%', sm: '75%', md: '75%', lg: '50%' } }}>
              <Button
                variant="contained"
                onClick={controller.handleClickCreateAccount}
                fullWidth
                size='large'
                sx={{ height:"46px", borderRadius: GENERAL_BORDER_RADIUS }}
              >
                Crear cuenta
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box width={"50%"} sx={{ width: { xs: '75%', sm: '75%', md: '75%', lg: '50%' } }}>
              <Button
                variant="contained"
                onClick={controller.handleClickLoginWithEmailAndPassword}
                fullWidth
                size='large'
                sx={{ height:"46px", borderRadius: GENERAL_BORDER_RADIUS }}
              >
                Ingresar
              </Button>
            </Box>
          </Grid>

          <Grid item my={4} xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box width={"50%"} sx={{ width: { xs: '75%', sm: '75%', md: '75%', lg: '50%' } }}>
              <Button 
              sx={{ height:"46px", textTransform: "none",borderRadius: GENERAL_BORDER_RADIUS }} 
              startIcon={<FcGoogle />} 
              style={{backgroundColor:"white", borderColor:"gray", color:"black"}}
              fullWidth 
              variant="outlined"
              size='large'
              onClick={controller.handleGoogleSingIn}>

                Sign in with Google
              </Button>
            </Box>
          </Grid>

        </Grid>

      </Box>
      <Box sx={{ padding: "32px", width: { xs: "50%" }, display: { xs: 'none', sm: 'initial' } }}>
        <Box width={`100%`} height={"100%"} sx={{ backgroundImage: `url(${imageURL})`, borderRadius: "20px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
        </Box>
      </Box>
    </Box>
  )
}


