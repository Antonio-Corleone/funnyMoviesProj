import { Fragment, useEffect, useState } from 'react'
import MovieCard from '../components/home-page/movie-card'

const getMovie = async () => {
  const response = await fetch('api/movie/get-movie');
  return await response.json();
}

export default function Home(props) {
  const [movieList, setMovieList] = useState(props.data);
  useEffect(() => {
    (async function () {
      const result = await getMovie();
      setMovieList(result?.content?.data)
    })();
  }, []);
  return (
    <Fragment>
      {movieList && movieList.map(movie => {
        return (
          <MovieCard movie={movie} key={movie.id} />
        )
      })}
    </Fragment>
  )
}
export async function getStaticProps(context) {
  const response = await fetch(`https://movie-app-gamma-ruddy.vercel.app/api/movie/get-movie`);
  const movieData = await response.json();
  return {
    props: {
      data: movieData?.content?.data,
    },
    revalidate: 3600
  }
}