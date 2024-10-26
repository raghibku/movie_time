'use client'
import { getPopularMovies } from '@/utils/getPopularMovies';
import React, { useState } from 'react'
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import MovieCard from '../shared/MovieCard';
import Title from '../shared/Title';

const PopularMovies = () => {
    const [page, setPage] = useState(1)

    const { data, error, isLoading, isFetching, isPlaceholderData } = useQuery({
        queryKey: ["popularMovies", page],
        queryFn: () => getPopularMovies(page), 
        placeholderData: keepPreviousData
    });

    console.log(isPlaceholderData)
    const popularMovieList = data || []
    const loadMoreMovies = () => setPage(prevPage => prevPage + 1);
    if (isLoading && page === 1) return <div>Loading...</div>;
    if (error) return <div>Error loading movies</div>;

    return (
        <div>
            <Title title_text='Popular Movies' />
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
                {
                    popularMovieList.map((movie: any) => <MovieCard key={movie.id} movie={movie} />)
                }
                {isFetching && <div>Loading more movies...</div>}
                {!isFetching && (
                    <button onClick={loadMoreMovies} className="btn btn-primary mt-4">
                        Load More
                    </button>
                )}
            </div>

        </div>
    )
}

export default PopularMovies