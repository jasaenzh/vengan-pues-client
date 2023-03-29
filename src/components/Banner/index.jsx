import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Banner = () => {
    const [show, setShow] = useState(false);

    const fadeIn = useSpring({
        opacity: show ? 1 : 0,
        from: { opacity: 0 },
    });

    return (
        <animated.div className="bg-info" style={fadeIn}>
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
        </animated.div>
    );
};

export default Banner;
