import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import Posts from './components/Posts';
import PostForm from './components/PostForm';


const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div> 
          <PostForm />
          <hr />
          <Posts />
        </div>  
      </Provider>
    );
  }
}

export default App;
