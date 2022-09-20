import { useState, useEffect } from 'react';
import { Login, Profile, Playlist } from './Componets.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { accessToken, logout } from './Spotify';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);
  return (
    <div className='App'>
      {!token ? (
        <>
          <Login />
        </>
      ) : (
        <>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path='/top-artists' element={<h1>Top Artist</h1>} />
              <Route path='/top-tracks' element={<></>} />
              <Route path='/playlists/:id' element={<></>} />
              <Route path='/playlists' element={<Playlist />} />
              <Route path='/' element={<Profile />} />
            </Routes>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
