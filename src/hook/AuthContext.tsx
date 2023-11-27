'use client'
import api from "@/config/api";
import {createContext, ReactNode, useContext, useState} from 'react';

const AuthContext = createContext<any>(null);


export const AuthProvider = ({children}: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (data: any) => {
    try {
      // Assuming the API response contains user data after successful login
      const result = await api.post("/login", data).then(res => res.data);
      // Assuming the API response contains accessToken and refreshToken
      const {accessToken, refreshToken, role} = result.data;

      // Set tokens in document.cookie
      document.cookie = `accessToken=${accessToken}; path=/; max-age=86400`; // Set the expiration time in seconds
      document.cookie = `refreshToken=${refreshToken}; path=/; max-age=86400`; // Set the expiration time in seconds
      document.cookie = `role=${role}; path=/; max-age=86400`;
      setIsLoggedIn(true);

      return result;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const logout = () => {
    // Thực hiện logic đăng xuất và cập nhật trạng thái đăng nhập

    setIsLoggedIn(false);
  };

  const getRole = async () => {
    const {cookies} = (await import('next/headers'))
    return cookies().get('role')?.value;
  }

  return (
    <AuthContext.Provider value={{getRole, isLoggedIn, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};