import React from "react";
import '../Movies'
import './Movie.css'

type TrackProps = {
    title: string
    poster: string
    year: number
}

const Movie = (props: TrackProps) => {
    return (
        <div className="movie">
            <h1>{props.title}</h1>
            <img src={props.poster} />
            <p>{props.year}</p>
        </div>
    )
}

export default Movie