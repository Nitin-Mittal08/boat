import {Routes, Route} from "react-router-dom";

import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import "@fontsource/metropolis";
import { CategoryPage } from "./Pages/CategoryPage/CategoryPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { SignUpPage } from "./Pages/SignUpPage/SignUpPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/categories/:categoryName" element={<CategoryPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
