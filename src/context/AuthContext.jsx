import { createContext, useContext, useState } from 'react';
import { api } from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(username, password) {
    try {
      const data = await api.login(username, password);
      setUser(data);
      return true;
    } catch {
      return false;
    }
  }

  function logout() { setUser(null); }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() { return useContext(AuthContext); }
