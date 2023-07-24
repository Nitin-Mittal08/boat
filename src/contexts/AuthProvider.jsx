import { createContext, useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router";

export const AuthContext = createContext();

export function AuthProvider({children}){
  const localToken = JSON.parse(localStorage.getItem("login"));
  const localUser =  JSON.parse(localStorage.getItem("user"));
  const [token, setToken] = useState(localToken?.token);
  const [user,setUser] = useState(localUser?.user);

  const navigate = useNavigate();
  const location = useLocation();

  const loginUser = async (userEmail, userPassword) => {
    if (userEmail !== "" && userPassword !== "") {
      const data = {
        email: userEmail,
        password: userPassword,
      };
    try {
        const response = await fetch("api/auth/login", {
          method: "POST",
          body: JSON.stringify(data)
        });
        const { foundUser, encodedToken } = await response.json();
        console.log(response)

        if(response.status === 200 || response.status === 201){
          localStorage.setItem("login", JSON.stringify({ token: encodedToken }));
          localStorage.setItem("user", JSON.stringify({ user: foundUser }));
          setToken(encodedToken);
          setUser(foundUser);
        //   navigate(location?.state.from.pathname);
          navigate("/");
        }else{
          alert(response.statusText);
        }
        console.log(foundUser);

      } catch (err) {
        console.error(err);
      }
    }
  };
    return(
      <AuthContext.Provider value={{token, user, loginUser}}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);