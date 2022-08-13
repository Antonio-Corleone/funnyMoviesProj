import { useState } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';

import classes from './form-login.module.css';



function FormLogin(props) {
  const [errorMessage, setErrorMessage] = useState('')
  const [enteredInput, setEnteredInput] = useState({
    email: '',
    password: ''
  })
  const router = useRouter();
  const handleLoginRegister = async (userInfo) => {
    const response = await fetch('api/auth/user-login', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    if (!response.ok) {
      setErrorMessage(data?.content?.error)
      throw new Error(data.message || 'Something went wrong')
    }
    if (data?.content?.isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredInput.email,
        password: enteredInput.password,
      });

      if (!result.error) {
        router.replace('/');
      }
    }
    return data;
  }
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      await handleLoginRegister(enteredInput);
    } catch (error) {
      console.log(error);
    }
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setEnteredInput({
      ...enteredInput,
      [name]: value
    })
  }

  return (
    <div className={classes.content}>
      <form className={classes.form} onSubmit={handleOnSubmit}>
        <div className={classes.controls}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={enteredInput.email}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className={classes.controls}>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={enteredInput.password}
            onChange={handleOnChange}
            required
          />
        </div>
        <button className={classes.button}>
          Login / Register
        </button>
      </form>
      <p className={classes.error}>{errorMessage}</p>
    </div>
  )
}

export default FormLogin