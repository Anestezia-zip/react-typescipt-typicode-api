import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostServices } from '../../services/apiServices.ts';
import { AppDispatch, AppStateType } from '../storage';
import { Album } from '../../interfaces/interfaces';

const Albums = () => {
    const dispatch: AppDispatch = useDispatch();
    const albums: Album[] = useSelector((state: AppStateType) => state.data.albums);

    useEffect(() => {
        PostServices.getAlbums(dispatch)
    }, [])

    const chunkedAlbums: Album[][] = [];
    for (let i = 0; i < albums.length; i += 4) {
      chunkedAlbums.push(albums.slice(i, i + 4))
    }

    console.log(chunkedAlbums);
    

    const capitalizeFirstLetter = (str: string): string => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

  return (
    <div className='albums-container'>
      <h2 style={{marginLeft: '20px'}}>Albums</h2>
      <ul>
      {chunkedAlbums.slice(0,20).map((albumChunk, index) => (
        <li key={index}>
          <h3>Album #{index + 1}</h3>
          <div className="album">
            {albumChunk.map((album, idx) => (
              <div className={`photo photo-${idx + 1}`} key={album.id}>
                <p className='photo-title'>{capitalizeFirstLetter(album.title)}</p>
                <img src={album.url} alt={album.title} />
              </div>
            ))}
          </div>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Albums