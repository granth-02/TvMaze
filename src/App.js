import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import "./App.css"
import Share from './share';
import Results from './result';
import Summary from './summary';

const App = () => {
  const [shows, setShows] = useState([]);

  const handleSearch = async (searchQuery) => {
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`);
      const data = await response.json();
      setShows(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <h1 className="app-title">Greetings ! You can Search Your Show Here:</h1>
        <div className="app-content">
          <Routes>
            <Route
              path="/"
              element={<Share onSearch={handleSearch} />}
            />
            <Route path="/results" element={<Results shows={shows} />} />
            <Route path="/summary/:showId" element={<Summary />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};


export default App;