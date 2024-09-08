import React, { useState } from 'react';
import axios from 'axios';
import Quote from './Quote';

function SearchQuotes() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchQuotes = async () => {
        try {
            // Use the full URL for the API request
            const response = await axios.get(`https://techplement-quoteapp-backend.onrender.com/api/v1/quotes/search`, {
                params: { author: searchTerm }
            });
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error fetching quotes by author:', error);
        }
    };

    return (
        <div className='search-container'>
            <input
                type="text"
                placeholder='Search by Author name'
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                }}
            />
            <button onClick={searchQuotes}>Search</button>
            {
                searchResults.length > 0 && (
                    <div className='search-results'>
                        {searchResults.map((result) => (
                            <Quote key={result._id} quote={result} />
                        ))}
                    </div>
                )
            }
        </div>
    );
}

export default SearchQuotes;
