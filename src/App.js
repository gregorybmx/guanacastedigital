import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/LoginComponent';
import UserRegister from './pages/UserRegister'
import UserConfiguration from './pages/UserConfiguration'
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Home from "./testData/cards"
//import UserConfiguration from './pages/userConfiguration'

function App() {
  return (
    <Router>
      <div className="App">

        <NavbarComponent />

        <Routes>
      
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<UserRegister />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/configuracionUsuario" element={<UserConfiguration/>}/>
        
        </Routes>



        <FooterComponent />

      </div>
    </Router>
  );
}

export default App;
