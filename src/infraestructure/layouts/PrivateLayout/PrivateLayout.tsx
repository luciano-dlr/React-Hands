import { Box } from "@mui/material";
import { Navbar } from "../../components/Navbar/Navbar";

interface PrivateLayoutProps {
    children:JSX.Element;

}

export const PrivateLayout = (privateLayoutProps:PrivateLayoutProps) => {
    
    const { children } = privateLayoutProps;

  return (
    <Box width={'100%'} height={'92vh'}>
        <Navbar />
        {children}
    </Box>
  )
}