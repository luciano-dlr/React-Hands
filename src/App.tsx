
import './App.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import '../src/infraestructure/firebase/config/firebaseConfig';
import { AppNavigator } from './infraestructure/navigation/AppNavigator'

function App() {
  return (
    <>
    <ToastContainer />
    <AppNavigator/>
    </>
  )
}
export default App
