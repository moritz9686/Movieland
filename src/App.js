import React, { useEffect , useState } from 'react'
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

const API_URL = "https://www.omdbapi.com?apikey=200c92b8";
const movie1 = {
    
        "Title": "Avengers Assemble",
        "Year": "2012–2019",
        "imdbID": "tt2455546",
        "Type": "series",
        "Poster": "N/A"
    }
    // application/json;
const App = () => {
    const[movies,setMovies] = useState([]);
    const[searchTerm , setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`
       
        );
        const data = await response.json();
       setMovies(data.Search);
      };
      useEffect(() => {
        searchMovies("avengers");
        }, []);
    
  return (
     <div className="app">
        <h1>MovieLand</h1>
        
        <div className='search'>
        <input
          placeholder='Search for a movie...' 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
         />
         <img
         src = {SearchIcon}
         alt = "search"
         onClick={() => setMovies(searchMovies(searchTerm))}
         />
        </div>
        <div className="container">
            {
                movies.length > 0 ?
               ( <div className="container">
                {movies.map((movie) => (
                    <div>
                        <MovieCard movie={movie}/>
                    </div>
                ))}

            </div>):
              (<div> <h2>No movies found </h2></div>)
                

            }
        
        </div>
    </div>
  );
}

export default App;

