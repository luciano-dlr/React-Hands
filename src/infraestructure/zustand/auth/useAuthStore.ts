import { create } from 'zustand'

type AuthStore = {
  user: User | null ;
  setUser: (data: any) => void; 
  

}

type User = {
  email: string;
  displayName: string;
  photoURL: string;
  stsTokenManager: StsTokenManager
}

type StsTokenManager = {
  accessToken: string;
  refreshToken: string;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (data: any) => set( () => ({ user: data })),
 
}))

export default useAuthStore

