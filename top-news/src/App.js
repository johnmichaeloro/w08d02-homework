import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: null
    }
  }
  handleLogin = (formData) => {
    this.setState({
      loggedIn: true,
      username: formData.username
    });
  }
  render(){
    return (
      <div className='app'>
        <h1>What's today's top headline?</h1>
        {
          this.state.loggedIn ?
          <topHeadline username={this.state.username} />
          :
          <LoginForm handleLogin={this.handleLogin} />
        }
      </div>
    )
  }
}

export default App;
