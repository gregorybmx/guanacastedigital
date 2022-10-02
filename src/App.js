import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/LoginComponent';
import UserRegister from './pages/userRegister'
import Cards from "./testData/cards"
import "./css/cards.css"
//import UserConfiguration from './pages/userConfiguration'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<UserRegister/>}/>
          <Route path="/home" element={<Cards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
