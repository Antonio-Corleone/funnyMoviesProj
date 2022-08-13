import Link from 'next/link';
import { useSession,signOut } from 'next-auth/client';

import classes from './logout.module.css'

function Logout(props) {
  const { userInfo } = props
  return (
    <div className={classes.content}>
      <p className={classes.item}>Welcome <b>{userInfo}</b></p>
      <div className={classes.item}>
        <button>
          <Link href="/share-page">
            Share a movie
          </Link>

        </button>
      </div>
      <div className={classes.item}>
        <button onClick={signOut}>Logout</button>
      </div>
    </div>
  )
}

export default Logout