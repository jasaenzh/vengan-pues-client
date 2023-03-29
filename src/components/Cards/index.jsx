import React from 'react';
import Card from '../Card';
import './index.css';

const Cards = () => {
    return (
        <div className="d-flex flex-column mt-4 w-100">
            <div className="bg-danger m-3 w-75">
                <p>
                    Quieres o necesitas viajar a Medellín, hospédate con nosotros...
                </p>
                <p>
                    Ofrecemos hospedaje en apartamentos cómodos, seguros y tranquilos, con
                    ubicación estratégica cerca al Hospital Pablo Tobón Uribe, Clínica
                    Universitaria Bolivariana, Clínica Cardiovascular, facultad de medicina
                    de la universidad pontificia bolivariana, facultad de ciencias
                    agrarias de la Universidad de Antioquia, tecnológico de Antioquia,
                    instituto universitario ITM, con fácil acceso al servicio público,
                    supermercados, centros comerciales y sitios turísticos
                </p>
            </div>
            <Card />
        </div>
    );
};

export default Cards;
