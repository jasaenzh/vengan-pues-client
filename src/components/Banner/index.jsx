import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import ChivaMedellin from '../../assets/logochivas-150x150.png';
import './index.css';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [
        'al Hospital Pablo Tobón Uribe',
        'a la Clínica Universitaria Bolivariana',
        'a la facultad de ciencias agrarias de la Universidad de Antioquia',
        'al tecnológico de Antioquia', 'al instituto universitario ITM,'
    ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Quieres o necesitas viajar a Medellín, hospédate con nosotros...</span>
                        <h4>{`Ofrecemos hospedaje en apartamentos cómodos, seguros y tranquilos.`}</h4>
                        <span> con ubicación estratégica cerca </span><span className="wrap">{text}</span>
                        <p>
                            Con fácil acceso al servicio público, supermercados, centros comerciales y sitios turísticos
                        </p>
                        <button onClick={() => console.log('conectado')}>
                            Vamos a conectarnos <ArrowRightCircle size={25} />
                        </button>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={ChivaMedellin} alt="Imagen3" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;



        // <div className=' rounded-2 bg-info'>
        //     <h4 id="slide-in" class="animation">
        //         Quieres o necesitas viajar a Medellín, hospédate con nosotros...
        //     </h4>
        //     <p>
        //         Ofrecemos hospedaje en apartamentos cómodos, seguros y tranquilos, con
        //         ubicación estratégica cerca al Hospital Pablo Tobón Uribe, Clínica
        //         Universitaria Bolivariana, Clínica Cardiovascular, facultad de medicina
        //         de la universidad pontificia bolivariana, facultad de ciencias
        //         agrarias de la Universidad de Antioquia, tecnológico de Antioquia,
        //         instituto universitario ITM, con fácil acceso al servicio público,
        //         supermercados, centros comerciales y sitios turísticos
        //     </p>
        // </div>