import React, { useState, useEffect } from 'react'
import api from './axios';
import requests from './request';
import './Banner.css'

const imgCover_baseUrl = "https://image.tmdb.org/t/p/original/"

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await api.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length)
                ]
            )
            return request;
        }
        fetchData();
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }


    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url('${imgCover_baseUrl + movie?.backdrop_path}')`,
            backgroundPosition: "center center"
        }}>

            <div className="banner-contents">

                <h1 className="banner-title">{movie?.tittle || movie?.name}</h1>

                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-description">
                    {truncate(movie?.overview, 250)}
                </h1>

            </div>
            <div className="banner--fadeBottom" />
        </header>

    )
}

export default Banner
