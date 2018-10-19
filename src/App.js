import React, { Component } from 'react';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <div>
        <PostForm />
        <hr />
        <Posts />
      </div>  
    );
  }
}

export default App;
