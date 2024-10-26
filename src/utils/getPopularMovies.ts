// const secretKey = process.env.SECRET_API_KEY;
export const getPopularMovies = async (page : number) => {
    const secretKey = process.env.NEXT_PUBLIC_SECRET_API_KEY;
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${secretKey}&page=${page}`)
    if (!res.ok) {
        throw new Error('Failed to fetch popular movies');
    }
    const data = await res.json()
    return data.results
}
