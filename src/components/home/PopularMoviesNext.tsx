'use client'
import { getPopularMovies } from "@/utils/getPopularMovies";
import { useInfiniteQuery } from "@tanstack/react-query";
import MovieCard from "../shared/MovieCard";


export default function PopularMoviesNext() {
  const fetchPopularMovies = async ({ pageParam = 1 }) => {
    const data = await getPopularMovies(pageParam);
    return data;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
  });

  if (status === "pending") return <p>Loading...</p>;
  if (status === "error") return <p>Error: {error?.message}</p>;

  return (
    <div>
      <h1>Popular Movies</h1>
      {data.pages.map((page, pageIndex) => (
        <div key={pageIndex} className="movies-page">
          {page.results?.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))|| <p>No movies available</p>}
        </div>
      ))}
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading more..." : hasNextPage ? "Load More" : "No more movies"}
      </button>
      {isFetching && !isFetchingNextPage && <p>Fetching more movies...</p>}
    </div>
  );
}
