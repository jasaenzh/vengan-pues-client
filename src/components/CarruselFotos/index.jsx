import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagen1 from '../../assets/img/Foto_1.jpeg';
import Imagen2 from '../../assets/img/Foto_2.jpeg';
import Imagen3 from '../../assets/img/Foto_3.jpg';
import Imagen4 from '../../assets/img/Foto_4.jpg';

const CarruselFotos = () => {
    return (
        <div className="container card">
            <Carousel className='carousel-container'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Imagen1}
                        alt="Imagen 1"
                        style={{ maxHeight: '300px' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Imagen2}
                        alt="Imagen 2"
                        style={{ maxHeight: '300px' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Imagen3}
                        alt="Imagen 3"
                        style={{ maxHeight: '300px' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Imagen4}
                        alt="Imagen 4"
                        style={{ maxHeight: '300px' }}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarruselFotos;