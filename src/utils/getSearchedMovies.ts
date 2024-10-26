
// const secretKey = process.env.SECRET_API_KEY;
export const getSearchedMovies = async (title:string) => {
    const secretKey = process.env.NEXT_PUBLIC_SECRET_API_KEY;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${secretKey}&query=${title}`,
    {
        cache: "no-cache"
    })
    if (!res.ok) {
        throw new Error('Failed to fetch popular movies');
    }
    const data = await res.json()
    console.log(data)
    return data.results
}
// https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=...
