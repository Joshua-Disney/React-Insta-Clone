import React from 'react';
import styled from 'styled-components';


const LoginBackground = styled.div`
  max-width: 1000px;
  height: 100vh;
  margin: 0 auto;
  padding: 100px 0;
  background-color: lightcyan;
`;

const LoginContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid .5px lightgray;
  border-radius: 5%;
  background-color: white;
`;

const InstagramImage = styled.img`
  width: 300px;
  margin-bottom: 20px;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginInput = styled.input`
  width: 300px;
  margin-bottom: 20px;
  padding: 5px 20px;
`;

const LoginButton = styled.button`
  width: 300px;
  border-radius: 5%;
`;


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  login = () => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };


  render() {
    return(
      <LoginBackground>
        <LoginContainer>
          <InstagramImage src='https://fontmeme.com/images/instagram-new-logo.png' alt ='Instagram logo'/>
          <form onSubmit={this.login}>
            <InputSection>
              <LoginInput 
                value={this.state.username}
                type='text'
                name='username'
                placeholder='username'
                onChange={this.handleInputChange}
                autoComplete='off'
              />
              <LoginInput
                value={this.state.password}
                type='text'
                name='password'
                placeholder='password'
                onChange={this.handleInputChange}
                autoComplete='off'
              />
            </InputSection>
            <LoginButton onClick={this.handleChanges}>Login</LoginButton>
          </form>
        </LoginContainer>
      </LoginBackground>
    )
  }
}

export default Login;