'use client'
import { getPopularMovies } from '@/utils/getPopularMovies';
import Image from 'next/image';
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import MovieCard from '../shared/MovieCard';
import Title from '../shared/Title';

const PopularMovies = () => {
    const { data: popularMovieList, error, isLoading } = useQuery({
        queryKey: ['popularMovies'],
        //queryFn: getPopularMovies,
    });

    // const {data} = await getPopularMovies();
    // console.log(popularMovieList)

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading movies</div>;

    return (
        <div>
            <Title title_text='Popular Movies'/>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
                {
                    //popularMovieList.map((movie: any) => <MovieCard key={movie.id} movie={movie}/>)
                }
            </div>

        </div>
    )
}

export default PopularMovies