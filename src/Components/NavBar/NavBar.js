// import React, { useContext } from 'react'
// import "./NavBar.css"
// // import { myContext } from '../../App';

// function parseAssetsFile(assetsContent) {
//     const lines = assetsContent.split('\n');
//     const assetMap = {};
  
//     lines.forEach(line => {
//       const [key, ...values] = line.split('='); // Use rest operator to capture all values after the first split
//       const value = values.join('='); // Re-join values in case there were '=' characters in the value itself
//       assetMap[key.trim()] = value.trim();
//     });
  
//     return assetMap;
//   }
  
//   const assetsContent = `
//   netflix-logo=https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png
//   nav-avatar=https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png`;
  
//   const assetMap = parseAssetsFile(assetsContent);
  
//   function NavBar() {
   
//     return (
//       <div className='navbar'>
       
//         <img className='logo' src={assetMap['netflix-logo']} alt="Netflix Logo" />
//         <img className='avatar' src={assetMap['nav-avatar']} alt="Avatar" />
//       </div>
//     );
//   }
  
//   export default NavBar;









import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API calls
import "./NavBar.css";

function NavBar({ setSearchResults }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  function parseAssetsFile(assetsContent) {
    const lines = assetsContent.split('\n');
    const assetMap = {};
  
    lines.forEach(line => {
      const [key, ...values] = line.split('='); // Use rest operator to capture all values after the first split
      const value = values.join('='); // Re-join values in case there were '=' characters in the value itself
      assetMap[key.trim()] = value.trim();
    });
  
    return assetMap;
  }
  
  const assetsContent = `
  netflix-logo=https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png
  nav-avatar=https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png`;
  
  const assetMap = parseAssetsFile(assetsContent);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=9dcfb17b91f126f28a14c74ca6456e13&query=${searchQuery}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching for movies:', error);
      setSearchResults([]);
    }
  };

  return (
    <div className='navbar'>
      <img className='logo' src={assetMap['netflix-logo']} alt="Netflix Logo" />
      <img className='avatar' src={assetMap['nav-avatar']} alt="Avatar" />
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="search-bar"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
}

export default NavBar;

  
  

// function NavBar() {
//   return (
//     <div  className='navbar'>
//       <img className='logo' src="'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'" alt="Netflix Logo" />
//       <img className='avatar' src="'https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'§" alt="Avatar" />
//     </div>
//   )
// }

// export default NavBar


 // const {value,ChangeName} = useContext(myContext)
   {/* <button onClick={ChangeName}>click</button>
        <h1>name:{value}</h1> */}
       
