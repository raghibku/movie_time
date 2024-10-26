'use client'
import MovieCard from '@/components/shared/MovieCard'
import Title from '@/components/shared/Title'
import { getMoviesFromList } from '@/utils/handleLocalStorage'
import React from 'react'

const page = () => {
  const FavoriteMovies = getMoviesFromList()
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

export default page