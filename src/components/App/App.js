import React, { Component } from 'react';
import './App.css';
// import ImageList from '../ImageList/ImageList'
import ImageList from '../ImageList/ImageList'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">

        <h1>The Mood Ring </h1>
        
     
      {/* <ImageList /> */}
      <ImageList />
     
      
      </div>
    );
  }
}

export default App;
