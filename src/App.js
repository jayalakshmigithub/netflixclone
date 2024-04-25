
import React, { createContext, useCallback, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import {originals,action, Comedy,romance,documentries,horror} from './Urls';
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";


function App() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="App">
      <NavBar setSearchResults={setSearchResults} />
      <div className="search-results-container">
        {searchResults.length > 0 ? (
          // Render search results if available 
          searchResults.map(movie => (
            <div className='search-result' key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <div className="movie-info">
                <div className="movie-title">{movie.title}</div>
                <div className="movie-id">{movie.id}</div>
                {/* Add more details as needed */}
                <button className="button">Play</button>
                <button className="button">My list</button>
              </div>
            </div>
          ))
        ) : (
          // Render Banner component with default/random movie if no search results
          <Banner />
        )}
      </div>
    {/* <Banner /> */}
    <RowPost url={originals} title='Netflix Originals' />
    <RowPost  url={action} title='Actions' isSmall/>
    <RowPost  url={horror} title='Horror' isSmall/>
    <RowPost  url={documentries} title='Documentries' isSmall/>
    <RowPost  url={romance} title='Romance' isSmall/>
    <RowPost  url={Comedy} title='Comedy' isSmall/>
    
    </div>
  );
}

export default App;





// const myContext = createContext()
// const [value,setValue] = useState('jayalakshmi')
  // const ChangeName=()=>{
  //   setValue('user')
  // }
  // const counter = useCallback(()=>{
     
  // },[])
// export{
//   myContext
// }
