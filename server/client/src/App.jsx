import { useState, useEffect } from 'react';
import { Login, Profile, Playlist, Sidebar } from './Componets.jsx';
import MainRoutes from './Routes.jsx';

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
          <div className='h-screen w-full bg-textgray relative flex overflow-hidden '>
            <Sidebar />
            <MainRoutes />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
