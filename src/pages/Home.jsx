import React from 'react';

import Cards from '../components/Cards';

const Home = () => {
    return (
        <div className="Home">


            <main className="container my-5">
                <Cards />
            </main>

            <footer className="bg-dark text-light py-3">
                <div className="container text-center">
                    &copy; 2023 creado por Jhony Saenz
                </div>
            </footer>
        </div>
    );
};

export default Home;
