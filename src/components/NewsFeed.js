import React, { Component } from "react";
import { articles } from "../seedData.js";

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      articles: articles
    };

  //  addVote() {
  //   return this.state.articles.map((article, i) => {

  //   const newInput =Number( this.state.article.vote)
  //   this.setState (const newValue = newInput + 1)
  //   }
  //  }
  // setState(
    
     
  
  // )





  } 

  render() {
      return this.state.articles.map((article, i) => {
        console.log(article.source)
      return (
        <div key ={i}>
          {/* <h1> {article.source.id}</h1> */}
          <h1> {article.title}</h1>
          <h2> {article.author}</h2>
          <p> {article.description}</p>
          <a href> {article.url}</a>
          {/* <li> <UpvoteButton/>{article.votes}</li> */}

        </div>
      );
    });
  }
}

export default NewsFeed;
