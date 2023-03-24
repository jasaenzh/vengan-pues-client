import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cleanApartamentos, getApartamentos } from '../../redux/actions'

// Base de datos archivo
import db from '../../db';

const Card = () => {

    const dispatch = useDispatch();

    const apartamentosProps = useSelector((state) => state.apartamentos)

    useEffect(() => {
        dispatch(getApartamentos());
        return () => {
            //dispatch que limpia el estado
            dispatch(cleanApartamentos())
        }
    }, [dispatch]);

    console.log(apartamentosProps)

    return (
        <div className='mt-5 bg-danger'>
            {/* {apartamentosProps?.map((apartamento) => {
                return (
                    <p key={apartamento.id}>{apartamento.name}</p>
                )
            })} */}

            {db.map((apartamento) => (
                <div key={apartamento.numeroApartamento}>
                    <h2>Apartamento {apartamento.numeroApartamento}</h2>
                    <p>Ubicación: {apartamento.ubicacion}</p>
                    <p>Área: {apartamento.areaMts} mts²</p>
                    <p>Precio: {apartamento.precio} USD</p>
                    <p>Habitaciones: {apartamento.habitaciones}</p>
                    <p>Camas dobles: {apartamento.camasDobles}</p>
                    <p>Camas sencillas: {apartamento.camasSencillas}</p>
                    <p>Baños: {apartamento.banos}</p>
                    {/* ... y así con el resto de los campos */}
                </div>
            ))}

        </div>
    )
}

export default Card
