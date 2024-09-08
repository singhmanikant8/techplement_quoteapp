import React from 'react';
import './Quote.css'
function Quote({quote}){
    return (
        <div className="quote-display">
            <p>{quote.text}</p>
            <h3>- {quote.author}</h3>
        </div>
    );
}
export default Quote;