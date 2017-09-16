import React from 'react';
import './Search.css';

const Search = ({onSearch}) => {
    return (
        <div className="search">
            <input 
                onChange={onSearch}
                type="text" 
                placeholder='Search...'/>
        </div>
    );
};

export default Search;