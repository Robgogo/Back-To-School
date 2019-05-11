import React, { Component } from 'react';
import classes from './Home.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <p>sami</p>
          <p className={classes.me}>You</p>
        </div>
      </div>
    );
  }
}

export default App;
