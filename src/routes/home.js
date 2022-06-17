import { useState, useEffect } from "react";
import Movie from '../components/movies';

function Home(){
        const api =
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year";
    
      const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState([]);
      const getMovies = async () => {
        const response = await fetch(api);
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
      };
    
      useEffect(() => {
        getMovies();
      }, []);
      console.log(movies);
    
      return (
        <div>
          <h1>The Movies</h1>
          {loading ? (
            <h2>now loading...</h2>
          ) : (
            <div>
              {movies.map((movie) => (
               <Movie
               key={movie.id}
               id={movie.id} title={movie.title}
               summary={movie.summary}
               coverImg={movie.large_cover_image}
               genres={movie.genres}/>
              ))}
            </div>
          )}
        </div>
      );
    }
       
  
export default Home;