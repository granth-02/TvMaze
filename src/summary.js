import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Summary = () => {
  const { showId } = useParams();
  const [summary, setSummary] = useState('');

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => {
        setSummary(data.summary);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [showId]);

  return (
    <div>
      <h2>Show Summary</h2>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

export default Summary;
