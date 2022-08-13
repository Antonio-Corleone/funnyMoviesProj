import classes from './movie-card.module.css'

function MovieCard(props) {
  return (
    <div className={classes.cardContent}>
      <div className={classes.itemLeft}>
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/k7eADjXaH0Y"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>

      <div className={classes.itemRight}>
        <h3 className={classes.movieTitle}>Movie Title</h3>
        <p><b>Shared by: </b><span>tuanvm@gmail.com</span></p>
        <p><b>Description:</b></p>
        <p>
          <i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem.
          </i>
        </p>
      </div>
    </div>
  )
}

export default MovieCard