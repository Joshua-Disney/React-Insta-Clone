import React from 'react';
import Login from '../Login';
import App from '../../App';

const authenticate = App => LoginPage => {
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      }
    }
    render() {
      return <FirstComponent />;
    }
  }
  return App
}

export default authenticate(App)(LoginPage);