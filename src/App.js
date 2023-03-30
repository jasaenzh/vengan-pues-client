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
    </div>
  );
}

export default App;
