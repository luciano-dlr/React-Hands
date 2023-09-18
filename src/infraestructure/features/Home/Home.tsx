import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Input } from '../../components/Input/Input';
import { AccountCircle } from '@mui/icons-material';
import {useState} from 'react';

export const Home = () => {
  const [email, setEmail] = useState<string>('');
  return (
    <>
      <Paper elevation={10}>
       <Typography variant='h6' fontSize={'50px'} textAlign={'center'}>
        Contenido
       </Typography>
        <Input inputState={email} setInputState={setEmail} label='Email' endIcon={<AccountCircle/>} variant='outlined' />
      </Paper>
    </>
  )
}





