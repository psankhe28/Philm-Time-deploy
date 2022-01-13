import axios from "axios";
import React, { useEffect,useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from '../../components/Pagination/Pagination'
import './Trending.css'
const Trending = () => {
  const [page, setPage] = useState(1)
    const [content, setContent] = useState([])
    const api_key='eb98dc2af0af6406c10a39362cf7765e'
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=${page}`
    );
    // console.log(data.results)
    setContent(data.results)
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);
  ;
  return (
    <div>
      <span className="pgTitle">Trending</span>
      <div className="trending">
          {
              content && content.map((c)=>(
                  <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type={c.media_type} vote_average={c.vote_average}/>
              ))
          }
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
