import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../features/Login/Login"
import { Home } from "../features/Home/Home"
import useAuthStore from "../zustand/auth/useAuthStore"
import { PrivateLayout } from "../layouts/PrivateLayout/PrivateLayout"
import { Register } from "../features/Register/Register"

export const AppNavigator = () => {

  const { user } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        {
          user?.stsTokenManager.accessToken
            ?
            <>
              <Route path="/home" element={
                <PrivateLayout>
                  <Home />
                </PrivateLayout>
              }
              />
              <Route path="/*" element={<Navigate to='/home' />} />
            </>
            :
            <>
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<Register />} />
              <Route path="/*" element={<Navigate to='/auth/login' />} />
            </>
        }
      </Routes>
    </BrowserRouter>
  )
}