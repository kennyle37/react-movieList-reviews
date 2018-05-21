import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import MovieReviews from './MovieReviews.jsx';
import Search from './Search.jsx';

import {moviesExampleData} from '../../exampleData/moviesExampleData.js';
import {reviewsExampleData} from '../../exampleData/reviewsExampleData.js';


const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos : moviesExampleData,
      reviews : reviewsExampleData
    };

  }

  render() {
    return (
      <Wrapper>
        <h1>This is where the app will go!</h1>
        <div>
          <MovieList
            videos={this.state.videos}
            reviews={this.state.reviews}
          />
        </div>
      </Wrapper>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
