import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


function Movie({coverImg, title, summary, genres, id}){
    return  <div>
    <img alt={title} src={coverImg}></img>
    <span className="title"><Link to={`/movie/${id}`}>{title}</Link></span>
    <p>{summary}</p>
    <ul>
      {genres.map((g) => (
        <li key={g}>{g}</li>
      ))}
    </ul>

    {/* // {(movie.hasOwnProperty("genres")? ul
// {movie.genres.map((g)=>(
// li key={g}>{g}/li
// ))}
// /ul : null)} */}
  </div>;

}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default Movie;