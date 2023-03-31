import React from 'react';
import Card from '../Card';
import './index.css';
import Banner from '../Banner';

const Cards = () => {
    return (
        <div className="d-flex flex-column align-content-center">

            <Banner className="container" />

            <Card />
        </div>
    );
};

export default Cards;
