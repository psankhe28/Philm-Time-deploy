import axios from "axios";
import React, { useEffect,useState } from "react";
import CustomPagination from '../../components/Pagination/Pagination'
import Genres from "../../components/Genres/Genres";
import SingleContent from "../../components/SingleContent/SingleContent";
import useGenres from "../../Hooks/useGenre";
const Series = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setnumOfPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([])
    const genreforURL=useGenres(selectedGenres)
    const api_key='eb98dc2af0af6406c10a39362cf7765e'
    // console.log(selectedGenres);
    const fetchMovies = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        );
        // console.log(data.results)
        setContent(data.results)
        setnumOfPages(data.total_pages)
      };
      useEffect(() => {
        window.scroll(0, 0);
        fetchMovies();
        // eslint-disable-next-line
      }, [page,genreforURL]);
    return (
        <div>
            <span className="pgTitle">Discover TV Series</span>
            <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
            <div className="trending">
          {
              content && content.map((c)=>(
                  <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type="tv" vote_average={c.vote_average}/>
              ))
          }
      </div>
      {numOfPages>1 && (
      <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
        </div>
    )
}

export default Series
