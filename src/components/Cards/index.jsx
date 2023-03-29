import React, { useState } from 'react';
import './index.css';
import Banner from '../Banner';
import Card from '../Card';
import { CSSTransition } from 'react-transition-group';

const Cards = () => {
    const [showBanner, setShowBanner] = useState(true);

    const handleBannerClose = () => {
        setShowBanner(false);
    };

    return (
        <div className="d-flex flex-column mt-4 w-100 align-content-center">
            <div className=" justify-content-center align-content-center m-4">
                <CSSTransition
                    in={showBanner}
                    timeout={500}
                    classNames="fade"
                    unmountOnExit
                >
                    <Banner onClose={handleBannerClose} />
                </CSSTransition>
            </div>
            <Card />
        </div>
    );
};

export default Cards;
