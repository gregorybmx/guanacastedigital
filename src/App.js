import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import UserRegister from './pages/userRegister'
import UserConfiguration from './pages/userConfiguration'
import BusinessPartnersConfiguration from './pages/businessPartnersConfiguration'
import DeliveryPartnersConfiguration from "./pages/deliveryPartnersConfiguration";
import BusinessPartnersRegister from './pages/businessPartnersRegister'
import DeliveryPartnersRegister from './pages/deliveryPartnersRegister'
import UserViewTools from './pages/userViewTools'
import BusinessPViewTools from './pages/businessPViewTools'
import DeliveryPViewTools from './pages/deliveryPViewTools'
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Home from "./testData/cards"
import CategoryRegister from "./pages/CategoryRegister";
import CategoryView from "./pages/CategoryView";
import SalesReport from "./pages/SalesReportBPRegister";
import SalesReportUpdate from "./pages/SalesReportBPUpdate";
import SalesReportView from "./pages/SalesReportBPView";

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
            <Route path="/home" element={<Home />} />
            <Route path="/configuracionusuario" element={<UserConfiguration />} />
            <Route path="/registrocategoria" element={<CategoryRegister/>} />
            <Route path="/vistacategoria" element={<CategoryView/>} />
            <Route path="/registroreporteventa" element={<SalesReport/>} />
            <Route path="/actualizacionreporteventa" element={<SalesReportUpdate/>} />
            <Route path="/vistareporteventa" element={<SalesReportView/>} />

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
