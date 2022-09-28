import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/LoginComponent';
import UserRegister from './pages/UserRegister'
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Cards from "./testData/cards"
//import UserConfiguration from './pages/userConfiguration'

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<UserRegister />} />
          <Route path="/home" element={<Cards/>} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
