import React, { useState } from 'react';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';

function App() {

  const [movies,setMovies] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')

  return (
    <div className="App">
      <Header movies={movies} setMovies={setMovies} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Movies movies={movies} setMovies={setMovies} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default App;