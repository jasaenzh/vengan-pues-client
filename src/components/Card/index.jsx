// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getApartamentos } from '../../redux/actions';
// import imagenEjemplo1 from "../../assets/apt101/07112019-Jaime_Navarro_6319.jpg"

// const Card = () => {
//     const dispatch = useDispatch();
//     const apartamentosProps = useSelector((state) => state.apartamentos);

//     useEffect(() => {
//         dispatch(getApartamentos());
//     }, [dispatch]);

//     return (
//         <div className='d-flex flex-wrap justify-content-between flex-column flex-sm-row m-3 w-100 bg-light text-center h-100'>
//             {apartamentosProps?.map((apartamento, index) => {
//                 return (
//                     <div key={index} className='bg-info my-3 mx-auto' style={{ width: '48%' }} >
//                         <img src={imagenEjemplo1} alt='Imagen1' className='img-fluid w-100 h-auto' />
//                         <h3> Apartamento {apartamento.numeroApartamento}</h3>
//                         <p>Ubicado en el {apartamento.ubicacion}, cuenta con {apartamento.habitaciones} habitaciones
//                             {apartamento.camasDobles && apartamento.camasDobles !== 0 ? ` equipadas con ${apartamento.camasDobles} cama(s) doble(s)` : ''}
//                             {apartamento.camasSencillas && apartamento.camasSencillas !== 0 ? ` y ${apartamento.camasSencillas} cama(s) sencilla(s)` : ''},
//                             un baño con agua caliente, secador de cabello, sala, comedor, sofá cama, televisor, internet, cocina equipada con nevera, lavadora, microondas, cafetera, licuadora, tostador de pan, olla presión, olla arrocera con vaporera, sandwichera, cámaras de seguridad en exteriores.</p>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default Card;

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
        <div className='d-flex flex-wrap justify-content-between flex-column flex-sm-row m-3 w-100 bg-light text-center h-100'>
            {apartamentosProps?.map((apartamento, index) => {
                let habitacionesLabel = apartamento.habitaciones === 1 ? 'habitación' : 'habitaciones';
                let camasDoblesLabel = apartamento.camasDobles === 1 ? 'cama doble' : 'camas dobles';
                let camasSencillasLabel = apartamento.camasSencillas === 1 ? 'cama sencilla' : 'camas sencillas';
                return (
                    <div key={index} className='bg-info my-3 mx-auto' style={{ width: '48%' }} >
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

                            <span> {apartamento.banos} baño{apartamento.banos === 1 ? '' : 's'} {apartamento.aguaCaliente === true ? ` con agua caliente` : ``},</span>
                            <span></span>


                            {/* 
                            
                             secador de cabello, sala, comedor, sofá cama, televisor, internet, cocina equipada con nevera, lavadora, microondas, cafetera, licuadora, tostador de pan, olla presión, olla arrocera con vaporera, sandwichera, cámaras de seguridad en exteriores.
                            {apartamento.tipo === 'dúplex' && apartamento.ubicacion === 'cuarto' ? ' Terraza con vista panorámica.' : ''} */}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;


