import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import MovieCard from '../components/home-page/movie-card'

export default function Home() {
  return (
    <Fragment>
      <MovieCard />
    </Fragment>
  )
}
