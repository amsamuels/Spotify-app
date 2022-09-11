import { useState, useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const accessToken = urlParams.get('access_token');
    const refreshToken = urlParams.get('refresh_token');

    if (refreshToken) {
      fetch(`/refresh_token?refresh_token=${refreshToken}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }
   
  }, []);
  return (
    <div className='App'>
      <div></div>
      <h1>Vite + React</h1>
      <div className='card'>
        <a href='http://localhost:8888/login'>Login to Spotify</a>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
