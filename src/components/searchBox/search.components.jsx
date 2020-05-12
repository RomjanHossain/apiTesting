import React from 'react';
import './search.style.css';

export const SearchBox = ({placeholder, handleSearch})=>(
    <input type="text" className="searchTerm" placeholder={placeholder} onChange={handleSearch}
/>
)
