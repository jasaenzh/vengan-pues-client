import React from 'react';
import Card from '../Card';
import './index.css';
import Banner from '../Banner';

const Cards = () => {
    return (
        <div className="d-flex flex-column mt-4 w-100 align-content-center">
            <div className=" justify-content-center align-content-center bg-danger m-4">
                <Banner />
            </div>
            <Card />
        </div>
    );
};

export default Cards;
