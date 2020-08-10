import React from 'react';
import './errorMessage.css';
import img from './error.jpg';

const ErrorMessage = (error) => {
    return (
        <>
            <img src={img} alt="Error"/>
            <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;