import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware';

type AuthStore = {
  user: User | null | any;
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

// const useAuthStore = create<AuthStore>(
//   persist(
//     (set) => ({
//       user: null,
//       setUser: (data: any) => set(() => ({ user: data })),

//     }),
//     {
//       name: 'auth-storage',
//       storage: createJSONStorage(() => sessionStorage)
//     }
//   )
// )

const useAuthStore = create<AuthStore>(
  (persist as any)(
    (set: any) => ({
      user: null,
      setUser: (data: any) => set(() => ({user: data})),
    }),
    {
      name: 'auth-storage', // the name of the item in AsyncStorage
      storage: createJSONStorage(() => sessionStorage), // use AsyncStorage as the storage
    }
  )
);

export default useAuthStore

