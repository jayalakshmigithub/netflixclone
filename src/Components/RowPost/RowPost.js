import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import axios  from '../../axios'
import "./RowPost.css"


function RowPost(props) {
    const [movies,setMovies] = useState([])
    const [urlId,setUrlId] = useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log('reponse in rowpost',response.data)
            setMovies(response.data.results)
        })
    },[props.url])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie = (id)=>{
        console.log('id in handleMovie',id);
        axios.get(`/movie/${id}/videos?api_key=${'9dcfb17b91f126f28a14c74ca6456e13'}`).then((response)=>{
            console.log('response in handleMovie',response.data)
             if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
             }else{
                console.log('not available');
             }
        })
      }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((obj)=>
            <img onClick={()=>{handleMovie(obj.id)}} className={ props.isSmall ?'smallPoster' :'poster'} src={`${'https:image.tmdb.org/t/p/original'+obj.backdrop_path}`} alt={obj.title}/>
            )}

        </div>
        {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
       

      
    </div>
  )
}



export default RowPost
