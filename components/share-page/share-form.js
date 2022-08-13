import { useState } from 'react';
import classes from './share-form.module.css';

function ShareForm() {

  const [enteredInput, setEnteredInput] = useState({
    movie: '',
    title: ''
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
      <fieldset>
        <legend>Share a Youtube movie</legend>
        <div className={classes.controls}>
          <label htmlFor="movie">Youtube URL:</label>
          <input
            type="text"
            name="movie"
            id="movie"
            value={enteredInput.movie}
            onChange={handleOnChange}
            placeholder="enter your movie url"
            required
          />
        </div>
        <div className={classes.controls}>
          <label htmlFor="title">Movie title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={enteredInput.title}
            onChange={handleOnChange}
            placeholder="enter your movie title"
            required
          />
        </div>
        <div className={classes.button}>
          <button >
            Share
          </button>
        </div>
      </fieldset>
    </form>
  )
}

export default ShareForm