import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApartamentos } from '../../redux/actions';

const Card = () => {
    const dispatch = useDispatch();
    const apartamentosProps = useSelector((state) => state.apartamentos);

    useEffect(() => {
        dispatch(getApartamentos());
    }, [dispatch]);

    return (
        <div className='d-flex flex-wrap justify-content-between flex-column flex-sm-row m-3 w-100 bg-light text-center h-100'>
            {apartamentosProps?.map((apartamento, index) => {
                return (
                    <div
                        key={index}
                        className='bg-info my-3 mx-auto'
                        style={{ width: '48%' }}
                    >
                        <h1>{apartamento.numeroApartamento}</h1>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
