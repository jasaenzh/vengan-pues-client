import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApartamentos } from '../../redux/actions';
import imagenEjemplo1 from "../../assets/apt101/07112019-Jaime_Navarro_6319.jpg"
import "./index.css";
import { Link } from 'react-router-dom';

const Card = () => {
    const dispatch = useDispatch();
    const apartamentosProps = useSelector((state) => state.apartamentos);

    useEffect(() => {
        dispatch(getApartamentos());
    }, [dispatch]);

    return (

        <div className='container'>
            <div className='row'>

                {apartamentosProps?.map((apartamento, index) => {

                    return (
                        <div div key={index} className='col-lg-6 col-md-12' >
                            <img src={imagenEjemplo1} alt='Imagen1' className='img-fluid w-100 h-auto' />
                            <Link to={`/apartamentos/${apartamento._id}`}>
                                <h3> Apartamento {apartamento.numeroApartamento}</h3>
                            </Link>
                        </div>
                    );
                })}

            </div>
        </div>


    );
};

export default Card;
