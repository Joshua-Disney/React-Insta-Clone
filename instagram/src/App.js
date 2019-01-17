import React from 'react';
import authenticate from './components/authentication/authenticate.js';
import PostsPage from './components/PostsPage/PostsPage';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        <PostsPage />
      </div>
    );
  }
}

const authenticate = App =>
  class extends React.Component {
    render() {
      return <App />;
    }
  };

export default App;