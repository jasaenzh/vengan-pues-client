import React from 'react';
import "./Home.css"
import Cards from '../components/Cards';
import CarruselFotos from '../components/CarruselFotos';

const Home = () => {
    return (

        <main className="container">
            <Cards />
            <CarruselFotos></CarruselFotos>
        </main>

    );
};

export default Home;
