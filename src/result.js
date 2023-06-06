import React from 'react';
import { Link } from 'react-router-dom';

const Results = ({ shows }) => {
    return (
        <div>
          <h2>Search Results</h2>
          {shows.map((show) => (
            <div key={show.show.id}>
              <Link to={`/summary/${show.show.id}`}>{show.show.name}</Link>
            </div>
          ))}
        </div>
      );
    };
export default Results;
