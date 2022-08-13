import { useState } from 'react';
import classes from './share-form.module.css';

const handleAddMovie = async (movieInfo)=>{
  const response = await fetch('api/movie/add-movie', {
    method: 'POST',
    body: JSON.stringify(movieInfo),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong')
  }
}
function ShareForm(props) {
  const {user} = props.author;
  const [enteredInput, setEnteredInput] = useState({
    movie: '',
    title: ''
  })

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log(enteredInput);
    try {
      await handleAddMovie({...enteredInput,author:user.email});
    } catch (error) {
      console.log(error);
    }
    // clear form
    setEnteredInput({
      movie: '',
      title: ''
    })
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