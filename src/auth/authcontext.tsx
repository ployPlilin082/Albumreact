import React, { createContext, useContext, useState } from "react";

interface User {
  name: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: (user?: User) => void;
  logout: () => void;
  getCurrentUser: () => User | null;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  getCurrentUser: () => null,
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("eventUser");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (userData?: User) => {
    const info = userData || { name: "User" };
    localStorage.setItem("eventUser", JSON.stringify(info));
    setUser(info);
  };

  const logout = () => {
    localStorage.removeItem("eventUser");
    setUser(null);
  };

  const getCurrentUser = () => user;

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        login,
        logout,
        getCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

const Auth = {
  Provider: AuthProvider,
  useAuth,
};

export default Auth;

 