import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import { imageUrl,API_KEY} from '../../constants/constants'
import './RowPost.css'
import axios from '../../axios'
export default function RowPost(props) {
    let [movies,setMovies]= useState([])
    let [urlId,seUrlId]=useState('')
    useEffect(()=>{
        axios.get(props.urls).then((response)=>{
            setMovies(response.data.results);


        })
    },)
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    }

    const handlemovie=(id)=>{
      console.log(id);
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-Us`).then((response)=>{
        console.log(response.data);
        if(response.data.results.length!==0){
            seUrlId(response.data.results[0])
        }else{
            console.log("empty array");
        }
    })
    }


  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((movie,index)=>{
            return(
                <img onClick={()=> handlemovie(movie.id)

                }  key={index} className={ props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+movie.poster_path}`} alt="poster" />
            )
        })}
       

      </div>
     {urlId && <Youtube  videoId={urlId.key} opts={opts}/>}
    </div>
  )
}
