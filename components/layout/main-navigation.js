import Link from 'next/link';

import FormLogin from './form-login';
import Logo from './logo';
import Logout from './logout';
import classes from './main-navigation.module.css';

function MainNavigation(props) {
  const isLogin = false;
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        {isLogin ? <Logout /> : <FormLogin />}
      </nav>
    </header>
  )
}

export default MainNavigation