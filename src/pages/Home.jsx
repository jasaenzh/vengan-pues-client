import React from 'react';
import "./Home.css"

import Cards from '../components/Cards';

const Home = () => {
    return (
        <div className="Home  justify-content-center align-content-center align-items-lg-center">
            <main className=" mt-5 container ">
                <Cards />
            </main>
        </div>
    );
};

export default Home;
