import React, {Component} from 'react';

class LoginForm extends React {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleLogin(this.state);
  }
  render(){
    return(
      <div>
        <h2>Sign In</h2>
        <form onSubmit = {this.handleSubmit}>
          username: <input onChange={this.handleChange} type='text' name='username' id='username-input' />
          password: <input onChange={this.handleChange} type='password' name='password' id='password-input' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default LoginForm;
