import React, { useState, useRef, useEffect } from 'react';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="min-w-full p-6 mt-2 border cursor-pointer rounded-2xl" onClick={toggleOpen}>
            <div className="flex flex-row items-center justify-between">
                <h2 className="text-lg font-semibold">{question}</h2>
                <img
                    src={isOpen ? 'https://img.icons8.com/ios-filled/50/000000/minus.png' : 'https://img.icons8.com/ios-filled/50/000000/plus.png'}
                    className={`transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
                    alt=""
                />
            </div>
            <div
                ref={contentRef}
                className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                style={{ transitionProperty: 'max-height' }}
            >
                <p className="m-2 text-gray-700">{answer}</p>
            </div>
        </div>
    );
};

export default FaqItem;
