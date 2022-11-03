import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './requests.js';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
     <Nav/>
     <Banner/>
     <Row 
      title="Netflix Originals" 
      fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow/>
     {/* <Row title="Trending Now" fetchUrl={requests.fetchTrending}/> */}
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <h1 className="Bottom">~Suryanshu Gautam</h1>
    </div>
  );
}

export default App;
