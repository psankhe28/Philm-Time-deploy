import axios from "axios";
import { Chip } from "@material-ui/core";
import React, { useEffect} from "react";
const Genres = ({selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,}) => {
        const handleAdd=(genre)=>{
            setSelectedGenres([...selectedGenres,genre]);
            setGenres(genres.filter((g)=>g.id!==genre.id));
            setPage(1);
        }
        const handleRemove=(genre)=>{
            setSelectedGenres(selectedGenres.filter((selected)=>selected.id!==genre.id));
            setGenres([...genres,genre]);
            setPage(1);
        }
        const fetchGenres = async () => {
            const { data } = await axios.get(
              `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
            );
            // console.log(data.results)
            setGenres(data.genres)
          };
          console.log(genres)
          useEffect(() => {
            window.scroll(0, 0);
            fetchGenres();
            return()=>
            {
                setGenres({});
            }
            // eslint-disable-next-line
          }, []);
    return (
        <div style={{padding:"16px 0"}}>
            {selectedGenres && selectedGenres.map((genre)=>
           (
               <Chip color="error" label={genre.name} style={ {margin:4,backgroundColor:"red",color:"white"}} size="small" key={genre.id} clickable onDelete={()=>handleRemove(genre)}/>
           ))}
           {genres.map((genre) => (
        <Chip
           color="error"
          style={{ margin: 4,backgroundColor:"red",color:"white"}}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
        </div>
    )
}

export default Genres
