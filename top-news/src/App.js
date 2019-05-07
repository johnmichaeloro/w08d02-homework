import React from 'react';
import TopHeadlines from './TopHeadlines/TopHeadlines';
import LoginForm from './LoginForm/LoginForm';
import './App.css';

class App extends React.Component {
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
          <TopHeadlines username={this.state.username} />
          :
          <LoginForm handleLogin={this.handleLogin} />
        }
      </div>
    )
  }
}

export default App;
