import React from 'react';

const Banner = ({ onClose }) => {
    return (
        <div className="bg-info p-3 rounded fade-in">
            <button type="button" className="close" onClick={onClose}>
                <span>&times;</span>
            </button>
            <p>Quieres o necesitas viajar a Medellín, hospédate con nosotros...</p>
            <p>
                Ofrecemos hospedaje en apartamentos cómodos, seguros y tranquilos, con
                ubicación estratégica cerca al Hospital Pablo Tobón Uribe, Clínica
                Universitaria Bolivariana, Clínica Cardiovascular, facultad de medicina
                de la universidad pontificia bolivariana, facultad de ciencias agrarias
                de la Universidad de Antioquia, tecnológico de Antioquia, instituto
                universitario ITM, con fácil acceso al servicio público, supermercados,
                centros comerciales y sitios turísticos
            </p>
        </div>
    );
};

export default Banner;


