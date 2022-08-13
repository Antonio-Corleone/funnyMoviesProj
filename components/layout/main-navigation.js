import Link from 'next/link';
import { useState } from 'react';
import { useSession } from 'next-auth/client';

import FormLogin from './form-login';
import Logo from './logo';
import Logout from './logout';
import classes from './main-navigation.module.css';

function MainNavigation(props) {
  const [session, loading] = useSession();
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        {!session && !loading && <FormLogin />}
        {session&&  <Logout userInfo={session.user.email} />}
      </nav>
    </header>
  )
}

export default MainNavigation;
