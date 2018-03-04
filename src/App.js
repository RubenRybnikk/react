import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';
import Logo from './Logo';
import Site from './Site';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedin: false,
      route: 'home'
    }
  }
  render() {
    return (
      <div>
         <div className="bg" />
         <div className="fillpage fade">
          <Site />
         </div>
         <div className="footer fade">
          <Footer />
         </div>
      </div>
    );
  }
}

export default App;
