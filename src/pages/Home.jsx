import React from 'react'
import NavBar from '../components/Navbar'
import Cards from '../components/Cards'



const Home = () => {
    return (
        <>
            <NavBar className="fixed-top" />

            <div className="container mb-5">
                <Cards />
            </div>

            <footer className="bg-dark text-light py-3 fixed-bottom">
                <div className="container text-center">
                    &copy; 2023 creado por Jhony Saenz
                </div>
            </footer>
        </>

    )
}

export default Home