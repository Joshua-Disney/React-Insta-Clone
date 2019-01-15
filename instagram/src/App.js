import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

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
          <h1>Disney's React App!  :D</h1>
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