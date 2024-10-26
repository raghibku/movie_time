'use client'

import { addMovieToList, removeMovieFromList } from "@/utils/handleLocalStorage";
import { useFavoriteMovies } from "../context/FavoriteMoviesContext";

interface ButtonProps {
    movie : {
        id : number,
        poster_path: string,
        title:string,
        release_date : string
    }
}

const FavButton:React.FC<ButtonProps> = ({ movie: { id, poster_path, title, release_date } }) => {
    const { favoriteMovies, setFavoriteMovies } = useFavoriteMovies();
  
    const handleAddToFav = () => {
        const newMovie = { id, poster_path, title, release_date}
        addMovieToList(newMovie)
        setFavoriteMovies((prevFavorites) => [...prevFavorites, id]);
    }
    const handleRemoveFromFav= () => {
        const newList = favoriteMovies.filter(item=>item!==id)
        removeMovieFromList(id)
        setFavoriteMovies(newList)
    }
    return (
        <>
        {
            !favoriteMovies.includes(id)?
            <button onClick={()=>handleAddToFav()} className="btn btn-primary w-full max-w-[200px]">
                Add To Favorite
            </button>
            :
            <button onClick={()=>handleRemoveFromFav()} className="btn btn-primary w-full max-w-[200px]">
                Remove from Favorite
            </button>
        }
            
        </>
    )
}

export default FavButton