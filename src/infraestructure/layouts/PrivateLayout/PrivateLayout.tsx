import { Navbar } from "../../components/Navbar/Navbar";

interface PrivateLayoutProps {
    children:JSX.Element;

}

export const PrivateLayout = (privateLayoutProps:PrivateLayoutProps) => {
    
    const { children } = privateLayoutProps;

  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}