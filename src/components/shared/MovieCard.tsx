import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface MovieCardProps {
    movie: any;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (
        <Link key={movie.id} href={`movies/${movie.id}`}>
            <div className='flex flex-col justify-start items-start px-4  border border-primary rounded-md'>
                {/* image */}
                <div>
                    <Image
                        height={200}
                        width={200}
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt=''
                        className='py-2'
                    />
                </div>
                {/* info */}
                <div className='py-5 gap-3'>
                    <h1 className='text-lg text-primary font-semibold'>{movie?.title}</h1>
                    <p className='text-base '>{movie?.release_date}</p>
                </div>
            </div>
        </Link>

    )
}

export default MovieCard