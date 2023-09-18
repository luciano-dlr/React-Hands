import { TextField, Input as InputMaterial, InputAdornment, FormControl, InputLabel, OutlinedInput, IconButton } from "@mui/material";
import { InputProps } from "./types";

export const Input = (inputProps: InputProps) => {

  // Sacar ciertos valores de un objeto
  // Interfaz o Type === Esqueleto o definicion de una estructura (Ej: InputProps)
  // inputProps => Por otra parte, inputProps es el contenido ()
  const { label, variant, placeholder, endIcon, startIcon, inputState, setInputState } = inputProps;

  return (
    <TextField
      label={label}
      variant={variant}
      placeholder={placeholder}
      value={inputState}
      onChange={(e) => setInputState(e.target.value)}
      InputProps={{
        startAdornment:
          <InputAdornment position="start">
            {startIcon}
          </InputAdornment>,
        endAdornment:
          <InputAdornment position="end">
            {endIcon}
          </InputAdornment>,
          
      }}
    />
  )
}

// const Login = () => {
//   return(
//     <Input label={"Email"} icon={<AddCircle/>} />
//     <Input label={"Contraseña"} />
//   )

// }


// class Persona {
//   protected name: string;
//   protected edad: string;
//   protected lastName: string;

//   constructor(name: string, edad: string, lastName: string){
//     this.name = name,
//     this.edad = edad,
//     this.lastName = lastName
//   }
// }


// const persona = new Persona('Leio', '26', 'De la rubia');


// crear usuarios en la paginationClasses, mostrar tabla con los usuarios creados con peticion a firestore
