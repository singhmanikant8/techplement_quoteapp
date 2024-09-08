import React,{useState} from 'react';
import axios from 'axios';
import Quote  from './Quote';

function SearchQuotes(){
    const [searchTerm,setSeacrhTerm] = useState('');
    const [searchResults,setSearchResults] = useState([]);

    const searchQuotes = async ()=>{
        try{
            const response = await axios.get(`/api/v1//quotes/search?author=${searchTerm}`);
            setSearchResults(response.data);
        }catch(er){
            console.log(er);
        }
    };
    return (
        <div className='search-container'>
            <input
            type="text"
            placeholder='Search by Author name'
            value={searchTerm}
            onChange={(e)=>{
                setSeacrhTerm(e.target.value);
            }}
            />
            <button onClick={searchQuotes}>Search</button>
            {
                searchResults.length>0 &&(
                    <div className='search-results'>
                        {searchResults.map((result)=>(
                            <Quote key={result._id} quote={result}/>
                        ))}
                    </div>
                )
            }
        </div>
    )
}
export default SearchQuotes;