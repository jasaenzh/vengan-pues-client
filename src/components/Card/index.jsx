import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApartamentos } from '../../redux/actions';
import imagenEjemplo1 from "../../assets/apt101/07112019-Jaime_Navarro_6319.jpg"
import imagenEjemplo2 from "../../assets/apt101/SLA_3734.jpg"
import imagenEjemplo3 from "../../assets/apt101/departamentos-de-lujo-2.jpeg"
import "./index.css";
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const Card = () => {
    const dispatch = useDispatch();
    const apartamentosProps = useSelector((state) => state.apartamentos);

    useEffect(() => {
        dispatch(getApartamentos());
    }, [dispatch]);

    return (

        <div>

        </div>

        // <div className='container'>
        //     <div className='row justify-content-center'>

        //         {apartamentosProps?.map((apartamento, index) => {

        //             return (
        //                 <div key={index} className='card col-lg-5 col-md-12 m-3' >
        //                     <Carousel >
        //                         <Carousel.Item>
        //                             <img
        //                                 className="d-block w-100"
        //                                 src={imagenEjemplo1}
        //                                 alt="First slide"
        //                             />
        //                         </Carousel.Item>
        //                         <Carousel.Item>
        //                             <img
        //                                 className="d-block w-100"
        //                                 src={imagenEjemplo2}
        //                                 alt="Second slide"
        //                             />
        //                         </Carousel.Item>
        //                         <Carousel.Item>
        //                             <img
        //                                 className="d-block w-100"
        //                                 src={imagenEjemplo3}
        //                                 alt="Third slide"
        //                             />
        //                         </Carousel.Item>
        //                     </Carousel>
        //                     {/* <img src={imagenEjemplo1} alt='Imagen1' className='card-img-top img-fluid  h-auto' /> */}
        //                     <Link className=' text-center' to={`/apartamentos/${apartamento._id}`}>
        //                         <p className="card-text"> Apartamento {apartamento.numeroApartamento}</p>
        //                     </Link>
        //                 </div>

        //             );
        //         })}

        //     </div>
        // </div>


    );
};

export default Card;
