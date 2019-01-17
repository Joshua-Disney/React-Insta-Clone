import React from 'react';

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

  login = (event) => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return(
      <div className='Login'>
        <form onSubmit={this.login}>
          <div>
            <input 
              value={this.state.username}
              type='text'
              name='username'
              placeholder='username'
              onChange={this.handleInputChange}
            />
            <input
              value={this.state.password}
              type='text'
              name='password'
              placeholder='password'
              onChange={this.handleInputChange}
            />
          </div>
          <button onClick={this.handleChanges}>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;