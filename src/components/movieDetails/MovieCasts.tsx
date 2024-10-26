import Image from 'next/image'
import React from 'react'
import Title from '../shared/Title';

interface MovieCastsProps {
    casts: any;
} 

const MovieCasts:React.FC<MovieCastsProps> = ({casts}) => {
    return (
        <div>
            {
                casts ?
                    <div>
                        <Title title_text='Casts'/>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                            {
                                casts.map((cast: any) => {
                                    return (
                                        <div className='flex flex-col justify-start items-center gap-2'>
                                            <Image
                                                height={200}
                                                width={200}
                                                src={`https://image.tmdb.org/t/p/w200${cast?.profile_path}`}
                                                alt={cast.name}
                                                className='py-2'
                                            />
                                            <h1 className='text-primary'>
                                                {cast?.name}
                                            </h1>
                                            <h1>
                                                {cast?.character}
                                            </h1>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    <></>
            }
        </div>
    )
}

export default MovieCasts