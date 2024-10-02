import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from "react"

type User = {
  id: string;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (userInfo: User) => void;
  logout: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if(context === undefined) {
    throw new Error("useAuth mut be used within an AuthProvider");
  }
  return context;
}


export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((userInfo: User) => {
      if (userInfo.username === 'testUser' && userInfo.email == "test@example.com") {
        setUser(userInfo);
      } else {
        console.log("cant logged in");
      }
  },[]);

  const logout = useCallback(() => {
    setUser(null);
  }, [])

  const contextValue = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user, login, logout]
  );


  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;