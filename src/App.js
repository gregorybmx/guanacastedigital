import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/LoginComponent';
import UserRegister from './components/userRegisterComponent'
import Home from './components/HomeComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<UserRegister/>}/>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
