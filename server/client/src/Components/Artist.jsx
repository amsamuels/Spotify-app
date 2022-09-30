import { useState,useEffect,useCallback} from 'react';
import { useParams } from 'react-router-dom';
import { catchErrors } from '../utils';
import { getArtist } from '../Spotify';

const Artist = () => {
  const { artistID } = useParams();
  const [artist, setArtist] = useState(null);

  console.log(artistID)

  const artistData = useCallback(async () => {
    const clickArtist = await getArtist(artistID);
    setArtist(clickArtist.data);
    console.log(clickArtist);
  });

  useEffect(() => {
    catchErrors(artistData());
  }, [artistID]);
  return <div></div>;
};

export default Artist;
