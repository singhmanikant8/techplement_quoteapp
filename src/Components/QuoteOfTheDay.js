import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteOfDay = () => {
    const [quote, setQuote] = useState({});

    useEffect(() => {
        fetchRandomQuote(); // Fetch a random quote when the component mounts
    }, []);

    const fetchRandomQuote = async () => {
        try {
            // Use the full URL for the API request
            const response = await axios.get('https://techplement-quoteapp-backend.onrender.com/api/v1/quotes/');
            setQuote(response.data);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    return (
        <div className='quote-fetcher'>
            <h1>Quote Of The Day</h1>
            <p>{quote.text}</p>
            <h3>- {quote.author}</h3>
            <button onClick={fetchRandomQuote}>New Quote</button>
        </div>
    );
};

export default QuoteOfDay;
