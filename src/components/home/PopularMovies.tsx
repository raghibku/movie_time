'use client'
import { getPopularMovies } from '@/utils/getPopularMovies';
import React, { useState } from 'react'
import { useQuery} from '@tanstack/react-query';
import MovieCard from '../shared/MovieCard';
import Title from '../shared/Title';

const PopularMovies = () => {
    const [page, setPage] = useState(1)

    const { data, error, isLoading, isFetching} = useQuery({
        queryKey: ["popularMovies", page],
        queryFn: () => getPopularMovies(page),
        
    });
    const popularMovieList = data || []
    const loadMoreMovies = () => setPage(prevPage => prevPage + 1);
    if (isLoading && page === 1) {
        return (<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
            <div className="skeleton h-[398px] w-[226px]"></div>
            <div className="skeleton h-[398px] w-[226px]"></div>
            <div className="skeleton h-[398px] w-[226px]"></div>
            <div className="skeleton h-[398px] w-[226px]"></div>
            <div className="skeleton h-[398px] w-[226px]"></div>
        </div>);
    }
    if (error) return <div>Error loading movies</div>;

    return (
        <div>
            <Title title_text='Popular Movies' />
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
                {
                    popularMovieList.map((movie: any) => <MovieCard key={movie.id} movie={movie} showBtn={false} />)
                }
            </div>
            {isFetching && <div>Loading more movies...</div>}
            {!isFetching && (
                <div className='w-full flex justify-center items-center'>
                    <button onClick={loadMoreMovies} className="btn btn-primary mt-4">
                    Load More
                </button>
                </div>
            )}


        </div>
    )
}

export default PopularMovies