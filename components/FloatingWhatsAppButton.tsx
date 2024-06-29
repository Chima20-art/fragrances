"use client"
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
    const phoneNumber = '212675255685';
    const defaultMessage = "Bonjour, je suis intéressé par vos parfums.";


    const handleClick = () => {
        const encodedMessage = encodeURIComponent(defaultMessage);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div
            className="fixed bottom-4 z-1000 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg cursor-pointer flex items-center justify-center transform transition-transform hover:scale-110"
            onClick={handleClick}
        >
            <FaWhatsapp size={35} />
        </div>
    );
};

export default FloatingWhatsAppButton;
