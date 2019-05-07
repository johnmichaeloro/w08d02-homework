import React, {Component} from 'react';

class TopHeadlines extends Component {
  constructor(){
    super();
    this.state = {
      headline: '',
      author: '',
      description: ''
    }
  }
  showHeadlines = async (e) => {
    e.preventDefault();
    const newsURL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b6ae8688af7b4d5aae22e0dc8c4fa6f3';
    const result = await fetch(newsURL);
    const parsedResult = await result.json();
    console.log(parsedResult);
    this.setState({
      headline: parsedResult.articles[0].title,
      author: parsedResult.articles[0].author,
      description: parsedResult.articles[0].description
    })
  }
  render(){
    return(
      <div>
        <form onSubmit={this.showHeadlines}>
          Show me the headline! <input type='submit' />
        </form>
        <h1>Today's top headline is</h1>
        <h2>Headline: {this.state.headline}</h2>
        <h2>Author: {this.state.author}</h2>
        <h2>Description: {this.state.description}</h2>
      </div>
    )
  }
}

export default TopHeadlines;
