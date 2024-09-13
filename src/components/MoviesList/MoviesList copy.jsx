import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { getMoviesOnCategory } from "../../api/api";

function MoviesList({title, category}) {

  const [moviesOnCategory, setMoviesOnCategory] = useState([]);


  useEffect(() => {
    (async () => {
      const movies = await getMoviesOnCategory(category);
      setMoviesOnCategory(movies);
    })();
  }, [category]);



  return (
    <section className="mt-16 first:mt-0">
      <h3 className="m-0 px-10">{title}</h3>

      <ul className="list-none px-10 flex gap-5 max-w-screen overflow-x-auto">
        {moviesOnCategory.map((movie) => (
          <li key={movie.id} className="flex-shrink-0 calc((100vw -80px-40px)/5)">
            <MovieCard movie={movie}/>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesList;