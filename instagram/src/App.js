import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dummyData,
    }
  }

  render() {
    return (
      <div className="App">
          <SearchBar />
          {
            this.state.dummyData.map((post) => {
              return <PostContainer post={post} />
            })
          }
      </div>
    );
  }
}

export default App;