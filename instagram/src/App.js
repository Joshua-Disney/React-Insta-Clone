import React from 'react';

import PostsPage from './components/PostsPage/PostsPage';
import LoginPage from './components/Login/Login'
import authenticate from './components/authentication/authenticate';

import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <div className='App'>
          <PostsPage />
        </div>
    );
  }
}


export default authenticate(App)(LoginPage);