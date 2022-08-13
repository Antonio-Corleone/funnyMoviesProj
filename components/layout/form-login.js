import { useState } from 'react';
import classes from './form-login.module.css';

function FormLogin(props) {
  const [enteredInput, setEnteredInput] = useState({
    email: '',
    password: ''
  })

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(enteredInput);
  }

  const handleOnChange = (event) => {
    const {name, value}= event.target;
    setEnteredInput({
      ...enteredInput,
      [name]: value
    })
  }

  return (
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
  )
}

export default FormLogin