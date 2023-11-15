import api from "@/config/api";

const useLogin = () => {


  const login = async (data: any) => {
    try {
      // Assuming the API response contains user data after successful login
      const result = await api.post("/login").then(res => res.data);
      // Assuming the API response contains accessToken and refreshToken
      const {accessToken, refreshToken} = result;

      // Set tokens in document.cookie
      document.cookie = `accessToken=${accessToken}; path=/; max-age=86400`; // Set the expiration time in seconds
      document.cookie = `refreshToken=${refreshToken}; path=/; max-age=86400`; // Set the expiration time in seconds

      return result;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  return {
    login,
  };
};

export default useLogin;
