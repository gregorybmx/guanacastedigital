import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import UserRegister from './pages/UserRegister'
import UserConfiguration from './pages/UserConfiguration'
import BusinessPartnersConfiguration from './pages/BusinessPartnersConfiguration'
import DeliveryPartnersConfiguration from "./pages/DeliveryPartnersConfiguration";
import BusinessPartnersRegister from './pages/BusinessPartnersRegister'
import DeliveryPartnersRegister from './pages/DeliveryPartnersRegister'
import UserViewTools from './pages/UserViewTools'
import BusinessPViewTools from './pages/BusinessPViewTools'
import DeliveryPViewTools from './pages/DeliveryPViewTools'
import DeliveryPartnersReports from './pages/DeliveryPartnersReports'
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Home from "./testData/cards"

function App() {
  return (
    <Router>
      <div className="App">

        <NavbarComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<UserRegister />} />
            <Route path="/bpregistro" element={<BusinessPartnersRegister />} />
            <Route path="/dpregistro" element={<DeliveryPartnersRegister />} />
            <Route path="/verusuario" element={<UserViewTools />} />
            <Route path="/versocioc" element={<BusinessPViewTools />} />
            <Route path="/versocior" element={<DeliveryPViewTools />} />
            <Route path="/reporterepartidor" element={<DeliveryPartnersReports />} />
            <Route path="/home" element={<Home />} />
            <Route path="/configuracionusuario" element={<UserConfiguration />} />
            <Route path="/scconfiguracion" element={<BusinessPartnersConfiguration />} />
            <Route path="/srconfiguracion" element={<DeliveryPartnersConfiguration />} />
          </Routes>
        </div>
        <FooterComponent />

      </div>
    </Router>
  );
}

export default App;
