import Link from 'next/link';
import classes from './logout.module.css'

function Logout() {
  return (
    <div className={classes.content}>
      <p className={classes.item}>Welcome <b>tuanvm@gmail.com</b></p>
      <div className={classes.item}>
        <button>
          <Link href="/share-page">
            Share a movie
          </Link>

        </button>
      </div>
      <div className={classes.item}>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Logout