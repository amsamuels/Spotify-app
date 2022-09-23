import { useState, useEffect } from 'react';
import {
  getCurrentUserProfile,
  getCurrentUserplaylist,
  getUserTopArtist,
  logout,
} from '../Spotify';
import {
  PlayIcon,
  ChevronDoubleLeftIcon,
  CodeBracketIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid';

const Profile = () => {
  const [profile, setUserProfile] = useState(null);
  const [playlist, setPlaylist] = useState(null);
  const [topArtist, setTopArtist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await getCurrentUserProfile();
        setUserProfile(userProfile.data);

        const userPlaylist = await getCurrentUserplaylist();
        setPlaylist(userPlaylist.data);

        const userTopArtist = await getUserTopArtist();
        setTopArtist(userTopArtist.data);
      } catch (err) {
        console.log('Unable to get Data');
      }
    };
    fetchData();
  }, []);
  return (
    <div className='bg-mainBG h-full   '>
      <div className='py-[60px] px-[60px]   '>
        {profile && (
          <div>
            <div>
              <div className='text-center'>
                {profile.images.length && profile.images[0].url && (
                  <img
                    src={profile.images[0].url}
                    className='w-12 h-10 m-auto rounded-full object-cover lg:w-32 lg:h-32'
                    alt='Avatar'
                  />
                )}

                <h5 className='hidden mt-4 text-xl font-semibold text-gray-600 lg:block'>
                  {profile.display_name}
                </h5>
                <h5 className='hidden text-gray-400 lg:block'>
                  Account Level: {''}
                  <span className=' uppercase'>{profile.product}</span>
                </h5>
                <h5 className='hidden text-gray-400 lg:block'>
                  {profile && (
                    <span className=' '>
                      Follower{profile.followers.total !== 1 ? 's' : ''}: {''}
                      {profile.followers.total}
                    </span>
                  )}
                </h5>
                <h5 className='hidden text-gray-400 lg:block'>
                  {playlist && (
                    <span className=''>
                      Playlist{playlist.total !== 1 ? 's' : ''}:{' '}
                      {playlist.total}
                    </span>
                  )}
                </h5>
              </div>
            </div>
            <div className='px-6 -mx-6 pt-4 flex justify-between items-center border-t'>
              <button
                onClick={logout}
                className='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'
              >
                <ArrowRightOnRectangleIcon className='h-6 w-6' />
                <span className='group-hover:text-gray-700'>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
