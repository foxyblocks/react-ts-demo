import React, { Component } from 'react';
import Logo from './logo.png';
import './App.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App__body">
          <img className="App__logo" src={Logo} />
          <blockquote className="App__quote">
            "Now this is a story all about how<br />
            my life got flipped turned upside down<br />
            and I'd like to take a minute just sit right there<br />
            I'll tell you how I become the prince of a town called Bel Air"
          </blockquote>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
