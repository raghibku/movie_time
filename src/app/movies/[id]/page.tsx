import MovieCasts from '@/components/movieDetails/MovieCasts';
import MovieDetails from '@/components/movieDetails/MovieDetails';
import MovieCard from '@/components/shared/MovieCard';
import ResponsiveDiv from '@/components/shared/ResponsiveDiv';
import Title from '@/components/shared/Title';
import { getMovieCast, getMovieDetails, getRelatedMovies } from '@/utils/getMovieDetails';
import React from 'react'

interface MovieDetailsProps {
    params : any
    // params: {
    //     id: string;
    // }
}

const page: React.FC<MovieDetailsProps> = async ({ params }) => {
    const { id } = await params
    const movieDetail = await getMovieDetails(id);
    const casts = await getMovieCast(id);
    const recommendations = await getRelatedMovies(id);
    return (
        <ResponsiveDiv>
            <div>
                {
                    movieDetail ?
                        <>
                            <div>
                                {/* backdrop and info */}
                                <MovieDetails movieDetail={movieDetail}/>
                                {/* cast */}
                                <MovieCasts casts={casts}/>
                                {/* recommendations */}
                                <div>
                                    {
                                        recommendations ?
                                            <div>
                                                <Title title_text='Recommendations'/>
                                                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
                                                    {
                                                        recommendations.map((movie: any) => <MovieCard key={movie.id} movie={movie} showBtn={false}/>)
                                                    }
                                                </div>
                                            </div>
                                            : <></>
                                    }
                                </div>

                            </div>
                        </>
                        :
                        <>
                            <h1>Loading....</h1>
                        </>
                }
            </div>
        </ResponsiveDiv>
    )
}

export default page