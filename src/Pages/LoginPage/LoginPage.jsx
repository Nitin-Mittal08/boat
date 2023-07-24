import { Link } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import "./LoginPage.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthProvider";

export function LoginPage() {
  const { loginUser } = useAuth();
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     let email = event.target.elements.email.value;
  //     let password = event.target.elements.password.value;
  //     console.log(event.target.elements.guest.value);
  //     console.log(event.target.elements.login.value);
  //     // event.target.elements.login.value==="login"?setUserDetails({email, password}):setUserDetails({email: "adarshbalika@gmail.com",
  //     // password: "adarshbalika"});
  // }

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    alert("please click on login as guest to continue...");
  };

  const handleGuestLogin = (event) => {
    event.preventDefault();
    setUserDetails({
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    });
  };
  useEffect(() => {
    loginUser(userDetails.email, userDetails.password);
  }, [userDetails]);
  return (
    <>
      <div className="loginMain">
        <Header />
        <div className="logInContainer">
          <form>
            <label htmlFor="email">Email Addess</label>
            <input
              id="email"
              type="email"
              value={userDetails.email}
              onChange={inputChangeHandler}
              name="email"
            ></input>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={userDetails.password}
              onChange={inputChangeHandler}
              name="password"
            ></input>
            <button
              onClick={handleLogin}
              type="submit"
              id="login"
              value="login"
            >
              Login
            </button>
            <button
              onClick={handleGuestLogin}
              type="submit"
              id="guest"
              value="guest"
            >
              Login as a Guest
            </button>
            <p>
              Don't have an account?{" "}
              <span>
                <Link to="/signup">Signup</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
