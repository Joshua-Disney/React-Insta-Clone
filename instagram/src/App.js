import React from 'react';
import authenticate from './components/authentication/authenticate';
import PostsPage from './components/PostsPage/PostsPage';
import Login from './components/Login/Login'
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      usernames: localStorage.getItem('username').split(',')
    }
  }

  login = (username) => {
    if (!this.state.usernames.includes(username)) {
      localStorage.setItem('username', [...this.state.usernames, username]);
    }
  };

  render() {
    return (
      <div>
        <div className='LoginPage'>
          <Login login={this.login} />
        </div>
        <div className='App'>
          <PostsPage />
        </div>
      </div>
    );
  }
}


export default App;