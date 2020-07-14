import React from 'react';
import './App.css';
import Row from './components/Row/Row';
import requests from './services/request'
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <div className="App">

      <Navbar />

      <Banner />

      <Row title="Originais Netflix" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Mais Populares" fetchUrl={requests.fetchTrending} />
      <Row title="Favoritos da Crítica" fetchUrl={requests.fetchTopRated} />
      <Row title="Ação" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comédia" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Terror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentários" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
