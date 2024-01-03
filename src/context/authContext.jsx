/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contactForm, setContactForm] = useState(false);
  const [showToast, setShowToast] = useState(true);

  function offToast() {
    setShowToast(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        showToast,
        offToast,
        contactForm,
        setContactForm,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext was used outside the AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
