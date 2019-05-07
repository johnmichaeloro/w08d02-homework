import React, {Component} from 'react';

class TopHeadlines extends Component {
  constructor(){
    super();
    this.state = {
      headline: ''
    }
  }
  showHeadlines = async () => {
    const newsURL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b6ae8688af7b4d5aae22e0dc8c4fa6f3';
    const result = await fetch(newsURL);
    const parsedResult = await result.json();
    this.setState({
      headline: parsedResult.articles[0].title
    })
  }
  render(){
    return(
      <div>
        <h1>Today's top headline is</h1>
        <h2>{this.state.headline}</h2>
      </div>
    )
  }
}

export default TopHeadlines;
