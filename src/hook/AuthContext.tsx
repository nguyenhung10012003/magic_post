'use client'
import api from "@/config/api";
import {createContext, ReactNode, useContext, useState} from 'react';
import {deleteCookie, getCookie} from "cookies-next";

const AuthContext = createContext<any>(null);


export const AuthProvider = ({children}: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null | undefined>(
    {idBranch: getCookie("idBranch"), role: getCookie("role")}
  );
  const login = async (data: any) => {
    try {
      // Assuming the API response contains user data after successful login
      const result = await api.post("/login", data).then(res => res.data);
      // Assuming the API response contains accessToken and refreshToken
      const {accessToken, refreshToken, role, idBranch} = result.data;

      // Set tokens in document.cookie
      document.cookie = `accessToken=${accessToken}; path=/; max-age=864000`; // Set the expiration time in seconds
      document.cookie = `refreshToken=${refreshToken}; path=/; max-age=864000`; // Set the expiration time in seconds
      document.cookie = `role=${role.toLowerCase()}; path=/; max-age=864000`;
      document.cookie = `idBranch=${idBranch ? idBranch : undefined}; path=/; max-age=864000`
      setUser({role: role.toLowerCase(), idBranch: idBranch});

      return result;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const logout = () => {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    deleteCookie("role");
    deleteCookie("idBranch");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};