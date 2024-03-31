const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies && props.movies.length > 0 ? (
        props.movies.map((movie, index) => (
          <div className="image-container d-flex justify-content-start m-3">
            <img src={movie.Poster} alt="movie"></img>
            <div
              onClick={() => props.handleFavouritesClick(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <FavouriteComponent />
            </div>
          </div>
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </>
  );
};

export default MovieList;
