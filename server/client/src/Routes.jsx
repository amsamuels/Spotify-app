import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Login, Profile, Playlist, Sidebar, TopArtist } from './Componets.jsx';
import InnerContent from './Componets.jsx/InnerContent.jsx';

const MainRoutes = () => {
  return (
    <div>
    
      <Routes>
        <Route path='/' element={<InnerContent />}>
          <Route path='/' element={<Navigate replace to='profile' />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/top-artists' element={<TopArtist />} />
          <Route path='/top-tracks' element={<></>} />
          <Route path='/playlists' element={<Playlist />} />
          <Route path='/playlists/:id' element={<></>} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
