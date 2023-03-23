import React from 'react';

// Con esta funcion se prepara paca que el componente pueda accerder al estado global o despachar acciones
import { connect } from 'react-redux';

const Card = () => {
    return (
        <div className='mt-5 bg-danger'>
            <h1>Contador</h1>

        </div>
    )
}

export default connect()(Card)