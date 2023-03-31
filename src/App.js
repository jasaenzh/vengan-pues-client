import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import DetallelApartamento from "./components/DetailApartament/index.jsx"
import NavBar from '../src/components/Navbar/index.jsx';


function App() {
  return (
    <div className=" mt-3">
      <NavBar />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/apartamentos/:_id' Component={DetallelApartamento} />
      </Routes>
      <footer className="bg-dark text-light py-3">
        <div className="container text-center">
          &copy; 2023 creado por Jhony Saenz
        </div>
      </footer>
    </div>

  );
}

export default App;
