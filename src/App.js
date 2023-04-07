import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import history from "./utils/History";
import { useAuth0 } from "@auth0/auth0-react";

import CargandoComponent from "./components/CargandoComponent";
import Login from './pages/Login';
import UserRegister from './pages/UserRegister'
import UserConfiguration from './pages/UserConfiguration'
import CategoryRegister from "./pages/CategoryRegister";
import CategoryList from "./pages/CategoryList";
import ProductRegister from "./pages/ProductRegister";
import ProductList from "./pages/ProductList";
import BusinessPartnersConfiguration from './pages/businessPartnersConfiguration'
import DeliveryPartnersConfiguration from "./pages/deliveryPartnersConfiguration";
import DeliveryPartnersReports from "./pages/DeliveryPartnersReports";
import BusinessPartnersRegister from './pages/businessPartnersRegister'
import DeliveryPartnersRegister from './pages/deliveryPartnersRegister'
import UserViewTools from './pages/userViewTools'
import BusinessPViewTools from './pages/businessPViewTools'
import DeliveryPViewTools from './pages/deliveryPViewTools'
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Home from "./pages/Home"
import SalesReport from "./pages/SalesReportBPRegister";
import SalesReportUpdate from "./pages/SalesReportBPUpdate";
import SalesReportView from "./pages/SalesReportBPView";
import VendorsList from "./pages/VendorsList";

function App() {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Parece que hubo un error... {error.message}</div>;
  }

  if (isLoading) {
    return (
    <div className={"container d-flex justify-content-center align-items-center h-100"}>
      <div className="row">
        <div>
          <CargandoComponent />
          <h3>INICIANDO SESIÓN ....</h3>
        </div>
      </div>
    </div>)
  }
  return (
    <BrowserRouter history={history}>
      <div className="App">

        <NavbarComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<UserRegister />} />
            <Route path="/bpregistro" element={<BusinessPartnersRegister />} />
            <Route path="/dpregistro" element={<DeliveryPartnersRegister />} />
            <Route path="/listausuario" element={<UserViewTools />} />
            <Route path="/listaocioc" element={<BusinessPViewTools />} />
            <Route path="/listasocior" element={<DeliveryPViewTools />} />
            <Route path="/reporterepartidor" element={<DeliveryPartnersReports />} />
            <Route path="/home" element={<Home />} />
            <Route path="/registrocategoria" element={<CategoryRegister />} />
            <Route path="/listacategorias" element={<CategoryList />} />
            <Route path="/configuracionusuario" element={<UserConfiguration />} />
            <Route path="/registroproductos" element={<ProductRegister />} />
            <Route path="/listaproductos" element={<ProductList />} />
            <Route path="/registrocategoria" element={<CategoryRegister />} />
            <Route path="/registroreporteventa" element={<SalesReport />} />
            <Route path="/actualizacionreporteventa" element={<SalesReportUpdate />} />
            <Route path="/vistareporteventa" element={<SalesReportView />} />
            <Route path="/scconfiguracion" element={<BusinessPartnersConfiguration />} />
            <Route path="/srconfiguracion" element={<DeliveryPartnersConfiguration />} />
            <Route path="/listaproveedores" element={<VendorsList />} />
          </Routes>
        </div>
        <FooterComponent />

      </div>
    </BrowserRouter>
  );
}

export default App;
