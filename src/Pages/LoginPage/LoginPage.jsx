import { Link } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import "./LoginPage.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import {AiFillDelete} from "react-icons/ai";

export function LoginPage() {
  const { loginUser, handleLogout } = useAuth();
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const {user} = localStorage.getItem("user")!==null ? JSON.parse(localStorage.getItem("user")):{user:null};
  const [address, setAddress] = useState([{id:1, name:"Nitin", house:"269",street:"Green Avenue", city:"Bathinda", pincode:"151001", mobile:"12345678790"}]);
  const [newAddress, setNewAddress] = useState(false);
    const [name, setName] = useState("");
    const [house, setHouse] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [pin, setPin] = useState("");
    const [mobile, setMobile] = useState("");

    function handleName(event) {
      setName(event.target.value);
  }
  function handleHouse(event) {
      setHouse(event.target.value)
  }
  function handleStreet(event) {
      setStreet(event.target.value);
  }
  function handleCity(event) {
      setCity(event.target.value);
  }
  function handlePin(event) {
      setPin(event.target.value);
  }
  function handleMobile(event) {
      setMobile(event.target.value);
  }


  const deleteAddress = (id) => {
    setAddress(address.filter(item => item.id!==id));
  }

  function addAddress() {
    setNewAddress(false);
    const newAddress = {
        name,
        house,
        street,
        city,
        pin,
        mobile
    }
    setAddress([...address,newAddress]);
}

function addNewAddress() {
  setNewAddress(true);
}

  


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
        {!user ? <div className="logInContainer">
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
        </div> : <div className="logoutContainer">
          <div className="details">
            <div className="userDetails">
              <p>Name: {user.firstName}</p>
              <p>Email: {user.email}</p>
              {console.log(user.email)}
            </div>
          </div>
          <div className="address">
          {address?.map((add, ind) => (
                        <div key={ind} className="indi-address">
                            <button className="addDel-btn" onClick={() => deleteAddress(add.id)}><AiFillDelete height={"large"}/></button>
                            <label>
                                <h3>{add.name}</h3>
                                <p>{add.house}</p>
                                <p>{add.street}</p>
                            </label>
                        </div>
                    ))}
            <div className="addAddressBtn"><button onClick={addNewAddress}>Add Address</button></div>
          </div>
          
          <button onClick={handleLogout} className="logoutBtn">Logout</button></div>}
      </div>
      
      {newAddress&& <div className="newAddress-inputs">
                    <label>Name</label>
                    <input type="text" required={true} value={name} onChange={handleName}/>
                    <label>House</label>
                    <input type="text" required={true} value={house} onChange={handleHouse}/>
                    <label>Street</label>
                    <input type="text" required={true} value={street} onChange={handleStreet}/>
                    <label>City</label>
                    <input type="text" required={true} value={city} onChange={handleCity}/>
                    <label>PinCode</label>
                    <input type="text" required={true} value={pin} onChange={handlePin}/>
                    <label>Mobile</label>
                    <input type="text" required={true} value={mobile} onChange={handleMobile}/>
                    <button onClick={addAddress}>Add</button>
                </div>}
              
    </>
  );
}
