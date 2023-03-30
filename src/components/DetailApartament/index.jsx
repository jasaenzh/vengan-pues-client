import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getApartamentoById } from '../../redux/actions';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';

const DetalleApartamento = () => {
    const { _id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(getApartamentoById(_id))
        dispatch(getApartamentoById(_id));
    }, [dispatch, _id]);

    const apartamento = useSelector((state) => state.apartamento);

    let habitacionesLabel = apartamento.habitaciones === 1 ? 'habitación' : 'habitaciones';
    let camasDoblesLabel = apartamento.camasDobles === 1 ? 'cama doble' : 'camas dobles';
    let camasSencillasLabel = apartamento.camasSencillas === 1 ? 'cama sencilla' : 'camas sencillas';



    return (


        <Container className="my-5 full-height">
            <Row>
                <Col md={6}>
                    {/* Aquí podrías mostrar las fotos del apartamento */}
                    <Carousel >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://via.placeholder.com/800x400.png?text=First+slide"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://via.placeholder.com/800x400.png?text=Second+slide"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://via.placeholder.com/800x400.png?text=Third+slide"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={6}>
                    {/* Aquí podrías mostrar el resumen del apartamento */}
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">Apartamento {apartamento.numeroApartamento}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Precio por dia: {apartamento.precio}</h6>

                            <p className="card-text">
                                <span>{apartamento.duplex === true ? 'Dúplex, ' : ''}</span>
                                <span>Ubicado en el {apartamento.ubicacion}, </span>
                                <span>cuenta con {apartamento.habitaciones} {habitacionesLabel}</span>
                                <span> equipada{apartamento.camasDobles > 1 || apartamento.camasSencillas > 1 ? '' : 's'} con </span>
                                <span>{apartamento.camasDobles && apartamento.camasDobles !== 0 ? ` ${apartamento.camasDobles} ${camasDoblesLabel}` : ''}</span>
                                <span>
                                    {
                                        apartamento.camasSencillas && apartamento.camasSencillas !== 0
                                            ? `${apartamento.camasDobles && apartamento.camasDobles !== 0
                                                ? ' y la otra con '
                                                : ''}${apartamento.camasSencillas} ${camasSencillasLabel}`
                                            : ''
                                    },
                                </span>
                                <span> {apartamento.banos} baño{apartamento.banos === 1 ? '' : 's'} {apartamento.aguaCaliente === true ? ` con agua caliente` : ``}</span>
                                <span>{apartamento.secadorCabello >= 1 ? `, secador de cabello` : ``}</span>
                                <span>{apartamento.salaEstar === true ? `, sala` : ``}</span>
                                <span>{apartamento.comedor >= 1 ? `, comedor` : ``}</span>
                                <span>{apartamento.sofaCama >= 1 ? `, sofá cama` : ``}</span>
                                <span>{apartamento.televisor >= 1 ? `, televisor` : ``}</span>
                                <span>{apartamento.internet === true ? `, internet` : ``}</span>
                                <span>{apartamento.cocina === true ? `, cocina equipada con` : ``}</span>
                                <span>{apartamento.nevera === true ? ` nevera` : ``}</span>
                                <span>{apartamento.lavadora === true ? `, lavadora` : ``}</span>
                                <span>{apartamento.microondas === true ? `, microondas` : ``}</span>
                                <span>{apartamento.cafetera === true ? `, cafetera` : ``}</span>
                                <span>{apartamento.licuadora === true ? `, licuadora` : ``}</span>
                                <span>{apartamento.tostadoraPan === true ? `, tostador de pan` : ``}</span>
                                <span>{apartamento.ollaPresion === true ? `, olla presión` : ``}</span>
                                <span>{apartamento.ollaArrocera === true ? `, olla arrocera con vaporera` : ``}</span>
                                <span>{apartamento.sanduchera === true ? `, sandwichera` : ``}</span>
                                <span>{apartamento.camaraSeguridad === true ? `, cámaras de seguridad en exteriores` : ``}</span>
                                <span>{apartamento.terrazaVista === true ? `, terraza con vista panorámica` : ``}</span>
                            </p>
                            <Button variant="primary">Reservar ahora</Button>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DetalleApartamento;