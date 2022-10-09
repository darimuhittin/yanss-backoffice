import { createContext, useState } from "react";

const AuthContext = createContext({
  user: null,
  isLoggedIn: false,
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    console.log("LOGIN");
  };

  const logoutHandler = () => {
    console.log("LOGOUT");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, loginHandler, logoutHandler, setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
