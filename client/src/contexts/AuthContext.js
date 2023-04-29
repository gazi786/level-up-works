import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const getUserData = JSON.parse(userData);
    if (getUserData) {
      setToken(getUserData.token);
      setRole(getUserData.role);
      setEmail(getUserData.userEmail);
      setUserId(getUserData.userID);
    }

  }, []);

  const login = (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));

    setIsLoggedIn(true);
    setToken(token);
    setRole(role);
    setEmail(email);
    setUserId(userId);

    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('email', email);
    localStorage.setItem('user_id', userId);
  };

  const logout = () => {
    setIsLoggedIn(false);

    setToken(null);
    setRole(null);
    setEmail(null);

    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    localStorage.removeItem('user_id', userId);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, role, setRole, email, setEmail, userId, setUserId, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
