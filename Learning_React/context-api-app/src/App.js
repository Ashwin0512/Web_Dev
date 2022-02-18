import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import Toggle from './components/Toggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <Toggle />
        </AuthContextProvider>  
      </ThemeContextProvider>
    </div>
  );
}

export default App;
