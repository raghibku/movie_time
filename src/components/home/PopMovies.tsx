'use client'
import { getPopularMovies } from '@/utils/getPopularMovies';
import React, { useState } from 'react'
import { useQuery, keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import MovieCard from '../shared/MovieCard';


const PopularMovies = () => {
    const fetchPopularMovies = async ({ pageParam = 1 }) => {
        const data = await getPopularMovies(pageParam);
        return data;
    };
    // const { data, error, isLoading, isFetching, isPlaceholderData } = useQuery({
    //     queryKey: ["popularMovies", page], // Include page in query key
    //     queryFn: () => getPopularMovies(page), // Pass page as an argument
    //     placeholderData: keepPreviousData
    // });

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ["popularMovies"],
        queryFn: fetchPopularMovies,
        initialPageParam: 1,
        getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    })

    const popularMovieList = data || [];
    return status === 'pending' ? (
        <p>Loading...</p>
    ) : status === 'error' ? (
        <p>Error: {error.message}</p>
    ) : (
        <>
            {data.pages.map((group, i) => (
                <React.Fragment key={i}>
                    {group.data.map((movie: any) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </React.Fragment>
            ))}
            <div>
                <button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                            ? 'Load More'
                            : 'Nothing more to load'}
                </button>
            </div>
            <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
    )
}

export default PopularMovies