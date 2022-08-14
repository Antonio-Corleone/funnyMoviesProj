import { useState, useEffect, Fragment } from 'react';

import Notification from '../ui/notification';
import NotificationHandler from '../../lib/notification-util';
import classes from './share-form.module.css';

const handleAddMovie = async (movieInfo) => {
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
  const { user } = props.author;
  const [enteredInput, setEnteredInput] = useState({
    movie: '',
    title: ''
  })
  const [requestStatus, setRequestStatus] = useState(null);
  let notification = NotificationHandler(requestStatus);

  useEffect(() => {
    if (requestStatus === 'pending' || requestStatus === 'error' || requestStatus === 'success') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      }
    }
  }, [requestStatus])

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setRequestStatus('pending');
    try {
      await handleAddMovie({ ...enteredInput, author: user.email });
      setRequestStatus('success');
    } catch (error) {
      console.log(error);
      setRequestStatus('error');
    }
    // clear form
    setEnteredInput({
      movie: '',
      title: ''
    })
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setEnteredInput({
      ...enteredInput,
      [name]: value
    })
  }
  return (
    <Fragment>
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
      {/* Add notification */}
      {notification &&
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />}
    </Fragment>
  )
}

export default ShareForm