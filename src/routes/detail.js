import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
 const [loading, setLoading] = useState(true);


  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
  <h1>Detail</h1>
  {loading ? <h3>Now loading...</h3> : <p>Movies</p>}
  </div>
    );
}
export default Detail;

//https://yts.mx/api/v2/movie_details.json?movie_id=
