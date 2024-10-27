import Link from 'next/link';
import React from 'react'
import FavButton from '../ui/FavButton';
import Image from 'next/image';

interface MovieCardProps {
    movie: any;
    showBtn: boolean
}

const MovieCard: React.FC<MovieCardProps> = ({ movie , showBtn=false }) => {
    return (
        <Link key={movie.id} href={`movies/${movie.id}`}>
            <div className='flex flex-col justify-between h-full items-start px-4  border border-primary rounded-md'>
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
                {
                    showBtn && <div className='w-full pb-4'><FavButton movie={movie}/></div>
                }
            </div>
        </Link>

    )
}

export default MovieCard