import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    //If I use an empty dependency array because if will just call once, if I insert auth in the array, it will check the variable in a infinity loop.
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
}

//custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
