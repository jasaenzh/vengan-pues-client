import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApartamentos } from '../../redux/actions';
import imagenEjemplo1 from "../../assets/apt101/07112019-Jaime_Navarro_6319.jpg"

const Card = () => {
    const dispatch = useDispatch();
    const apartamentosProps = useSelector((state) => state.apartamentos);

    useEffect(() => {
        dispatch(getApartamentos());
    }, [dispatch]);

    return (

        <div className='container'>
            <div className='row'>

                <div className="loader">
                    <span className="loader__element"></span>
                    <span className="loader__element"></span>
                    <span className="loader__element"></span>
                </div>

                {apartamentosProps?.map((apartamento, index) => {
                    let habitacionesLabel = apartamento.habitaciones === 1 ? 'habitación' : 'habitaciones';
                    let camasDoblesLabel = apartamento.camasDobles === 1 ? 'cama doble' : 'camas dobles';
                    let camasSencillasLabel = apartamento.camasSencillas === 1 ? 'cama sencilla' : 'camas sencillas';
                    return (
                        <div div key={index} className='col-lg-6 col-md-12' >
                            <img src={imagenEjemplo1} alt='Imagen1' className='img-fluid w-100 h-auto' />
                            <h3> Apartamento {apartamento.numeroApartamento}</h3>
                            <p>
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
                        </div>
                    );
                })}

            </div>
        </div>


    );
};

export default Card;