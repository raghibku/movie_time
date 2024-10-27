'use client'


import { getMoviesFromList } from '@/utils/handleLocalStorage';
import React, { useEffect, useState } from 'react'
import Title from '../shared/Title';
import MovieCard from '../shared/MovieCard';

const FavoritePage = () => {
    const [FavoriteMovies, setFavoriteMovies] = useState<any[]>([]);
    useEffect(() => {
        const movies = getMoviesFromList();
        if (movies) {
          setFavoriteMovies(movies);
        }
      }, []);
  return (
    <div>
      {
        FavoriteMovies ?
          <div>
            <Title title_text='Favorite Movies' />
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
              {
                FavoriteMovies.map((movie: any) => <MovieCard key={movie.id} movie={movie} showBtn={true} />)
              }
            </div>
          </div>
          : 
          <>
            <Title title_text='No Movies In the list' />
          </>
      }
    </div>
  )
}

export default FavoritePage