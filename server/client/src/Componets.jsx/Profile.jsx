import { useState, useEffect } from 'react';
import {
  getCurrentUserProfile,
  getCurrentUserplaylist,
  getUserTopArtist,
  logout,
} from '../Spotify';
import { Link } from 'react-router-dom';
import {
  PlayIcon,
  CodeBracketIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
const Profile = () => {
  const [profile, setUserProfile] = useState(null);
  const [playlist, setPlaylist] = useState(null);
  const [topArtist, setTopArtist] = useState(null);

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
    <div className=' bg-gray-800'>
      <>
        {profile && (
          <div className='bg-slate-600'>
            <aside className='ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]'>
              <div>
                <div className='mt-8 text-center'>
                  {profile.images.length && profile.images[0].url && (
                    <img
                      src={profile.images[0].url}
                      className='w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28'
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
                <ul className='space-y-2 tracking-wide mt-8'>
                  <div>
                    <Link
                      to='/playlists'
                      className='relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400'
                    >
                      <PlayIcon className='h-5 w-5 fill-current text-gray-300 group-hover:text-cyan-300' />
                      <span className='-mr-1 font-medium'>Dashboard</span>
                    </Link>
                  </div>
                  <div>
                    <a
                      href='#'
                      className='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'
                    >
                      <CodeBracketIcon className='h-5 w-5 ill-current text-gray-300 group-hover:text-cyan-300' />
                      <span className='group-hover:text-gray-700'>
                        Categories
                      </span>
                    </a>
                  </div>
                </ul>
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
            </aside>
            <div className='pl-[260px]'>
              <TopArtist topArtist={topArtist.items}/>
              <ProfilePlaylist />
            </div>
          </div>
        )}
      </>
    </div>
  );
};

const ProfilePlaylist = ({ playlist }) => {
  return <div></div>;
};

const TopArtist = ({ topArtist }) => {
  console.log(topArtist);
  return (
    <div>
      {topArtist && topArtist.length ? (
        <div>
          {topArtist.map((artist, i) => (
            <div key={i}>
              <div>{artist.name}</div>
              <div>
                {artist.images.length && artist.images[0].url && (
                  <img
                    src={artist.images[0].url}
                    className='w-22 h-24'
                    alt='Artist'
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>There is no artist </div>
      )}
    </div>
  );
};

export default Profile;
