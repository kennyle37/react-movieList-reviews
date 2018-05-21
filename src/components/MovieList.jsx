import React from "react";
import {moviesExampleData} from '../../exampleData/moviesExampleData.js'
import MovieListItem from './movieListItem.jsx'

const MovieList = ({videos, reviews}) => (
  //wrap this in a div and create a class name for it
  <div className="Movie-List">
    {videos.Search.map( (video, index) =>
      <MovieListItem
        video={video}
        key={index}
      />
    )}
  </div>
  //map our movieList item component out
)

export default MovieList;

