import { Box, Button, Grid } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Input } from '../../components/Input/Input';

import { useRegisterController } from './Register.controller';

export const Register = () => {

    const controller = useRegisterController()

    return (
        <Box width={'40%'} height={'100vh'} display={"flex"} justifyContent={'center'} alignItems={'center'} style={{ backgroundColor: 'gray' }}>
            <Grid container spacing={4} alignItems="center" flexDirection="column">
                <Grid item>
                    <Input inputState={controller.email} setInputState={controller.setEmail} label='Email' endIcon={<AccountCircle />} variant='outlined' />
                </Grid>
                <Grid item>
                    <Input inputState={controller.password} setInputState={controller.setPassword} label='contraseña' variant='outlined' />
                </Grid>

                <Button
                    variant="contained"
                    onClick={controller.handleClickCreateUser}
                >
                    {/* Registro en firestore, set  */}
                    Registrarse  😂
                </Button>
                <Button
                    variant="contained"
                    onClick={controller.handleClickNavigate}
                >
                    Volver
                </Button>

            </Grid>
        </Box>
    )
}





// Pasos

//Maquetear el login y registro
//Atomizar el componente registro 
