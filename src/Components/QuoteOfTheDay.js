import React,{useState,useEffect} from 'react';
import axios from 'axios';

const QuoteOfDay = ()=>{
    const [quote, setQuote] = useState({});

    useEffect(() => {
        fetchRandomQuote(); // Fetch a random quote when the component mounts
    }, []);

    const fetchRandomQuote = async ()=>{
        try{
            const response = await axios.get('/api/v1/quotes/');
            setQuote(response.data);
        }catch(er){
            console.log(er);
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
}
export default QuoteOfDay;