const secretKey = process.env.NEXT_PUBLIC_SECRET_API_KEY;
export const getMovieDetails = async (id: string) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${secretKey}`,
        {
            next: {
                revalidate: 60
            }
        }
    )
    // Handle possible errors
    if (!res.ok) {
        throw new Error("Failed to fetch movie details");
    }
    const data = await res.json();
    // console.log(data)
    return data;
}

export const getMovieCast = async(id: string)=>{
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${secretKey}`
    )
    if (!res.ok) {
        throw new Error("Failed to fetch movie Cast");
    }
    const data = await res.json();
    // console.log(data.cast)
    const fiveCasts = data.cast.slice(0, 5)
    return fiveCasts;
}

export const getRelatedMovies = async (id: string) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${secretKey}`,
        {
            next: {
                revalidate: 60
            }
        }
    )
    // Handle possible errors
    if (!res.ok) {
        throw new Error("Failed to fetch recommended movies ");
    }
    const data = await res.json();
    const fiveRecom = data?.results.slice(0, 5)
    console.log(fiveRecom)
    return fiveRecom;
}



// https://api.themoviedb.org/3/movie/1184918/credits
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=YOUR_API_KEY
//https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${secretKey}
