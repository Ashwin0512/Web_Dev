import React, { useEffect, useState } from "react";
import Movie from "./Movie/Movie";
import './Movies.css'
import CircularProgress from '@mui/material/CircularProgress';


type Props = {
    movies:any
    setMovies:any
    searchTerm: any
    setSearchTerm: any
}

const API_KEY = '6bf4082d'


const Movies: React.FC<Props> = props => {

    const [correctResponse, setCorrectResponse] = useState<any>(true)
    const [errorText, setErrorText] = useState<string>('')
    
    useEffect(() => {

        if(props.searchTerm !== '') {
            fetch(`http://www.omdbapi.com/?s=${props.searchTerm}&apikey=${API_KEY}`)
            .then(res => res.json())
            .then(res => {
                if(res.Response === "True") {
                   setCorrectResponse(true)
                   return props.setMovies(res.Search)
                } else {
                    setCorrectResponse(false)
                    setErrorText(res.Error)
                }
            })
        }
    },[props.searchTerm])

    if(!correctResponse) {
        return(
        <div className="error">
            <img src="https://cdn.pixabay.com/photo/2021/01/10/20/03/laptop-5906264_1280.png" />
            <p>{errorText}</p>
        </div>
        )
    }

    if(props.searchTerm === '') {
        return(
            <></>
        )
    }

    if(props.movies.length === 0) {
        return (
            <div className="loader">
                <CircularProgress />
            </div>
        )
    }

    return (
        <div className="movies">
        {props.movies.flat().map((movie:any) => {
            return(
                <Movie title={movie['Title']} poster={movie['Poster']} year={movie['Year']} key={Math.random()} />
            )
        })}
        </div>
    )
}

export default Movies