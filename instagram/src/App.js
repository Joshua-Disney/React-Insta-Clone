import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dummyData: [],
      posts: ''
    }
  }

  componentDidMount() {
    this.setState({dummyData});
  }

  filterPosts = () => {
    if (this.state.posts) {
      return this.state.dummyData.filter(posts => {
        return posts.username.includes(this.state.posts)
      })
    } return this.state.dummyData
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const filteredPosts = this.filterPosts();
    return (
      <div className='App'>
          <SearchBar
            posts={this.state.posts}
            handleChanges={this.handleChanges}
          />
          <div className='container'>
            {
              filteredPosts && filteredPosts.map((post) => {
                return <PostContainer
                  key={post.timestamp} 
                  post={post} />
              })
            }
          </div>
      </div>
    );
  }
}

export default App;