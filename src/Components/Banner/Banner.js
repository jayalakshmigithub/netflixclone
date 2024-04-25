import React, { useEffect, useState } from 'react'


import axios from '../../axios'
import "./Banner.css"

function Banner() {
    const [movie,setMovie] = useState()
   useEffect(() => {
        const fetchRandomMovie = async () => {
            try {
                const response = await axios.get(`trending/all/week?api_key=${'9dcfb17b91f126f28a14c74ca6456e13'}&language=en-US`);
                const randomIndex = Math.floor(Math.random() * response.data.results.length);
                const randomMovie = response.data.results[randomIndex];
                setMovie(randomMovie);
            } catch (error) {
                console.error('Error fetching random movie:', error);
            }
        };

        fetchRandomMovie();
    }, []);
  return (
    <div 
    style={{backgroundImage: `url(${movie ? 'https://image.tmdb.org/t/p/original' + movie.backdrop_path : ''})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
    <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner





// useEffect(() => {
//     axios.get(`trending/all/week?api_key=${'9dcfb17b91f126f28a14c74ca6456e13'}&language=en-US`).then((response)=>{
//         console.log('response',response.data.results[1])
//         setMovie(response.data.results[1])
//     })

// }, []);