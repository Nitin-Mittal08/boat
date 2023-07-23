import { Link } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import "./LoginPage.css";

export function LoginPage() {

  const handleSubmit = (event) => {
      event.preventDefault();
      let username = event.target.elements.username.value;
      let password = event.target.elements.password.value;
  }
  return (
    <>
      <div className="loginMain">
        <Header />
        <div className="logInContainer">
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input id="username" type="text"></input>
              <label htmlFor="password">Password</label>
              <input id="password" type="password"></input>
              <button type="submit">Login</button>
              <button >Login as a Guest</button>
              <p>Don't have an account? <span><Link to="/signup">Signup</Link></span></p>
            </form>
        </div>
      </div>
    </>
  );
}
