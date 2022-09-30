import React from 'react'

const TopArtist = ({topArtist}) => {
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
  )
}

export default TopArtist
