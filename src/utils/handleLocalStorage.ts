'use client'
interface Movie {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
}


export const addMovieToList = (newMovie: Movie): void => {
    const movieList: Movie[] = JSON.parse(localStorage.getItem("movieList") || "[]");

    // Check to avoid duplicates
    const isExisting = movieList.some(movie => movie.id === newMovie.id);
    if (!isExisting) {
        movieList.push(newMovie);
        localStorage.setItem("movieList", JSON.stringify(movieList));
    }
};

export const removeMovieFromList = (id: number): void => {
    const movieList: Movie[] = JSON.parse(localStorage.getItem("movieList") || "[]");

    // Filter out the movie with the specified ID
    const updatedMovieList = movieList.filter(movie => movie.id !== id);

    // Update the localStorage 
    localStorage.setItem("movieList", JSON.stringify(updatedMovieList));
};

export const getMoviesFromList = (): Movie[] => {
    return JSON.parse(localStorage.getItem("movieList") || "[]");
};
