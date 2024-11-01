// Faq.jsx
import React from 'react';
import FaqItem from './FaqItem';

const Faq = () => {
    const faqData = [
        { question: "What is your return policy?", answer: "Our return policy allows returns within 30 days of purchase with a receipt." },
        { question: "How do I track my order?", answer: "You can track your order through the 'Order Tracking' page using your order ID." },
        { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to select countries." },
        { question: "Can I cancel my order?", answer: "Orders can be canceled within 24 hours of placement." },
        { question: "How do I contact support?", answer: "You can contact our support team through the Contact Us page." },
        { question: "What payment methods are accepted?", answer: "We accept Visa, MasterCard, and PayPal." },
        { question: "Do you offer gift cards?", answer: "Yes, we offer digital gift cards available on our website." },
        { question: "Is there a warranty on products?", answer: "Yes, our products come with a one-year warranty." },
        { question: "How do I reset my password?", answer: "You can reset your password from the login page." },
        { question: "Can I update my address after ordering?", answer: "You can update your address within 24 hours after placing an order." }
    ];

    // Split the data into two arrays
    const leftColumnData = faqData.slice(0, 5);
    const rightColumnData = faqData.slice(5, 10);

    return (
        <div className='p-4'>
            <div className="flex flex-col md:gap-4">
                <div className="justify-center w-20 p-3 mx-auto text-center">
                    <h1 className='text-lg text-white bg-green-500 rounded-full'>FAQ</h1>
                </div>
                <div className="items-center justify-center text-center">
                    <h1 className='text-2xl font-semibold'>Questions & Answers</h1>
                </div>
                <div className="grid max-w-5xl grid-cols-1 gap-4 mx-auto mt-4 md:grid-cols-2">
                    <div>
                        {leftColumnData.map((item, index) => (
                            <FaqItem key={index} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                    <div>
                        {rightColumnData.map((item, index) => (
                            <FaqItem key={index} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
