import React, { Component } from 'react';
import AddButton from './addButton';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddButton />
        <p>
          Clicking this button will generate a calendar event. This can be added
          to your website. Is this the solution you wanted?
        </p>
      </div>
    );
  }
}

export default App;
