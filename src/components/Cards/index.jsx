import React from 'react';
import Card from '../Card';
import './index.css';
import Banner from '../Banner';

const Cards = () => {
    return (
        <div className="d-flex flex-column mt-4 w-100">
            <div className=" justify-content-center align-content-center bg-danger m-3 w-100">
                <Banner />
            </div>
            <Card />
        </div>
    );
};

export default Cards;
