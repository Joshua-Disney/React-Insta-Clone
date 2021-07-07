import React from 'react';
import styled from 'styled-components';

import PostsPage from './components/PostsPage/PostsPage';
import LoginPage from './components/Login/Login'
import authenticate from './components/authentication/authenticate';


const MainApp = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 20px;
  text-align: center;
  background-color: lightgray;
`;

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <MainApp>
          <PostsPage />
        </MainApp>
    );
  }
}


export default authenticate(App)(LoginPage);