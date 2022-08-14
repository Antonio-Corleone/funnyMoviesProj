import Image from 'next/image';
import { Fragment } from 'react';
import classes from './logo.module.css'

export default function Logo() {
  return (
    <div className={classes.content}>
      <div className={classes.img}>
        <Image
          src="/img/home.jpg"
          alt="Logo"
          width={60}
          height={40}
        />
      </div>
      <h1 className={classes.logo}>Funny Movies</h1>
      <div className={classes.clear}></div>
    </div>
  )
}
