import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./share.css"

const Share = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const history = useNavigate();
  
    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSearch(searchQuery);
      history('/results');
    };
  
    return (
      <div>
        <h2>Search for a TV Show</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a TV show name"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  };
  

export default Share;