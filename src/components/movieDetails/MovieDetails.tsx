import Image from 'next/image';
import React from 'react'
import FavButton from '../ui/FavButton';

interface MovieDetailsProps {
    movieDetail: any;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({movieDetail}) => {
    return (
        <div className='flex justify-start items-start gap-4 bg-cover bg-center text-white py-10 px-4'
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path})`,
            }}
        >

            {/* poster */}
            <div>
                <Image
                    height={450}
                    width={300}
                    src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
                    alt=''
                    className='py-2'
                />
            </div>
            {/* info */}
            <div className='flex flex-col justify-start items-start gap-4 lg:w-[60%]'>
                {/* title */}
                <h1 className='text-4xl font-semibold text-primary'>{movieDetail.title}</h1>
                {/* release date */}
                <p>{movieDetail?.release_date}</p>
                {/* overview */}
                <p>{movieDetail?.overview}</p>
                {/* genres */}
                <div className='flex justify-start items-center gap-3'>
                    <p>Genres : </p>
                    {
                        movieDetail?.genres.map((item: any, index: any) => {
                            return (
                                <p key={index}>{item.name}</p>
                            )
                        })
                    }
                </div>
                {/* fav button */}
                <FavButton movie={{
                    id:movieDetail.id,
                    poster_path:movieDetail.poster_path,
                    title:movieDetail.title,
                    release_date:movieDetail.release_date}}/>
            </div>

        </div>
    )
}

export default MovieDetails