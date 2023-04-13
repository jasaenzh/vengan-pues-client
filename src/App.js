import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import DetallelApartamento from "./components/DetailApartament/index.jsx"
import NavBar from '../src/components/Navbar/index.jsx';
import FooterMain from './components/Footer';
import React from 'react';


function App() {
  return (
    <div>
      <NavBar className="css-navBar mt-1" />
      <main className='css-main'>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/apartamentos/:_id' Component={DetallelApartamento} />
        </Routes>
      </main>
      <FooterMain className='css-footer' />
    </div>

  );
}

export default App;
