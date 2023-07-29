// MovieData.js
import React, { useEffect, useState } from 'react';

const MovieData = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://hoblist.com/favourites/list/movies', {
      method: 'POST',
      body: JSON.stringify({
        category: 'movies',
        language: 'kannada',
        genre: 'all',
        sort: 'voting',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setMovies(data.result));
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Movie Data</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieData;
