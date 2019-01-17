import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createLogin = () => {
    this.props.login(this.state.username);
  }

  render() {
    return(
      <div className='Login'>
        <form onSubmit={this.createLogin}>
          <div>
            <input 
              value={this.state.username}
              type='text'
              name='username'
              placeholder='username'
              onChange={this.handleChanges}
            />
            <input
              value={this.state.password}
              type='text'
              name='password'
              placeholder='password'
              onChange={this.handleChanges}
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;