'use client';
import { getSearchedMovies } from '@/utils/getSearchedMovies';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import MovieCard from '../shared/MovieCard';
import { useQuery } from '@tanstack/react-query';

function debounce(func: (...args: any[]) => void, delay: number) {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}

interface SearchFormValues {
    search: string;
}

const SearchMovies: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SearchFormValues>();
    const [searchTerm, setSearchTerm] = useState('');

    
    const { data: searchedMovies, isLoading, isError } = useQuery({
        queryKey: ['searchedMovies', searchTerm], 
        queryFn: () => getSearchedMovies(searchTerm),
        enabled: !!searchTerm, 
    });

    const onSubmit = (data: SearchFormValues) => {
        console.log("Searching for:", data.search);
        setSearchTerm(data.search);
    };

    // Debounce function
    const debouncedSubmit = debounce(onSubmit, 500); 

    return (
        <div className='py-10'>
            {/* search bar */}
            <div className='flex justify-center items-center pb-10'>
                <form onSubmit={handleSubmit(debouncedSubmit)} className='flex justify-center items-center gap-6'>
                    <label htmlFor="search">Search:</label>
                    <input
                        id="search"
                        type="text"
                        {...register("search", {
                            required: "Search is required",
                            minLength: { value: 3, message: "Minimum 3 characters required" }
                        })}
                        onChange={(e) => setSearchTerm(e.target.value)} // Set the search term directly
                        placeholder="Type here"
                        className="input input-bordered input-secondary w-full max-w-xs" />

                    {errors.search && <p>{errors.search.message}</p>}
                    <button className='btn btn-primary' type="submit">Search</button>
                </form>
            </div>
            {/* search results */}
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching movies</p>}
            {searchedMovies && searchedMovies.length > 0 ? (
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                    {searchedMovies.map((movie: any) => <MovieCard key={movie.id} movie={movie} />)}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default SearchMovies;
