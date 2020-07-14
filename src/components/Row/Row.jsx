import React, { useState, useEffect } from 'react';
import api from '../../services/axios';
import Youtube from 'react-youtube';
import './Row.css'
import requests from '../../services/request';

const img_baseUrl = "https://image.tmdb.org/t/p/w500/"

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('')
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    useEffect(() => {
        async function fectchData() {
            const request = await api.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fectchData();
    }, [fetchUrl]);

    async function handleClick(movie) {
        let response;

        if (movie?.name) {
            response = await api.get(requests.fetchTrailer('tv', movie?.id));
            console.table(response.data.results)
            try {
                setTrailerUrl(response.data.results[0].key)
            } catch (err) {
                setTrailerUrl('')
                alert("Trailer Não encontrado " + err)
            }
        } else {
            response = await api.get(requests.fetchTrailer('movie', movie?.id));
            console.table(response.data)
            try {
                setTrailerUrl(response.data.results[0].key);
            } catch (err) {
                setTrailerUrl('')
                alert("Trailer não encontrado :( ")

            }

        }

    }


    return (
        <div className="row">
            <h1>{title}</h1>

            <div className="row-posters">
                {movies.map(movie => {

                    return <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className="row-poster"
                        src={img_baseUrl + movie.poster_path}
                        alt={movie.name}
                    />

                })}
            </div>

            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>

    )

}

export default Row;