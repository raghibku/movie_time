'use client'
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

    // useQuery for fetching searched movies
    const { data: searchedMovies, isLoading, isError } = useQuery({
        queryKey: ['searchedMovies'],
        queryFn: () => getSearchedMovies(searchTerm)
    });

    const onSubmit = handleSubmit((data: any) => {
            console.log("Searching for:", data.search)
            setSearchTerm(data.search); // Update the searchTerm state
    });


    // Debounce function to handle the submit call
    const debouncedSubmit = debounce(onSubmit, 500); // 500ms delay

    return (
        <div className='py-10'>
            {/* search bar */}
            <div className='flex justify-center items-center'>
                <form onSubmit={debouncedSubmit} className='flex justify-center items-center gap-6'>
                    <label htmlFor="search">Search:</label>
                    <input
                        id="search"
                        type="text"
                        {...register("search", {
                            required: "Search is required",
                            minLength: { value: 3, message: "Minimum 3 characters required" }
                        })}
                        onChange={(e) => {
                            e.preventDefault();
                            debouncedSubmit(e); // Trigger debounced submit on every change
                        }}
                        placeholder="Type here"
                        className="input input-bordered input-secondary w-full max-w-xs" />

                    {errors.search && <p>{errors.search.message}</p>}
                    <button className='btn btn-primary' type="submit">Search</button>
                </form>
            </div>
            {/* search results */}
            {
                searchedMovies ?
                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
                        {
                            searchedMovies.map((movie: any) => <MovieCard key={movie.id} movie={movie} />)
                        }
                    </div> : <h1>No Results Found</h1>
            }
        </div>
    );
};

export default SearchMovies;
