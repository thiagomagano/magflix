import React, { useState, useEffect } from 'react';
import api from './axios';
import './Row.css'

const img_baseUrl = "https://image.tmdb.org/t/p/w500/"

function Row ({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
         async function fectchData(){
            const request = await api.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fectchData();
    }, [fetchUrl]);
    
    console.table(movies);

    return(
        <div className="row">
        <h1>{title}</h1>

        <div className="row-posters">
            {movies.map(movie => {
               
               return <img 
                        key={movie.id}
                        className="row-poster"
                        src={img_baseUrl+movie.poster_path} 
                        alt={movie.name}
                    />

            })}
        </div>

        </div>
        
    )

}

export default Row;