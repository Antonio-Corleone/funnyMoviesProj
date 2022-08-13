import { Fragment, useEffect, useState } from 'react'
import MovieCard from '../components/home-page/movie-card'

const getMovie = async () => {
  const response = await fetch('api/movie/get-movie');
  return await response.json();
}

export default function Home() {
  const [movieList, setMovieList] = useState();
  useEffect(() => {
    (async function () {
      const result = await getMovie();
      setMovieList(result)
    })();
  }, []);

  return (
    <Fragment>
      {movieList?.content?.data.map(movie=>{
        return (
          <MovieCard movie={movie} key={movie.id}/>
        )
      })}
    </Fragment>
  )
}
