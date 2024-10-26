
import ResponsiveDiv from "@/components/shared/ResponsiveDiv";
import ReactQueryProvider from './ReactQueryProvider';
import PopularMovies from "@/components/home/PopularMovies";
import SearchMovies from "@/components/home/SearchMoviesNew";


export default function Home() {
  return (
    <ResponsiveDiv>

      <ReactQueryProvider>
        <div>
          <SearchMovies />
          <PopularMovies />
        </div>

      </ReactQueryProvider>

    </ResponsiveDiv>
  );
}
