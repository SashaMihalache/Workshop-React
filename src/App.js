import React, { Component } from 'react';
import contacts from './helpers/mockData';

class App extends Component {
  state = {
    contacts: contacts,
    selectedContact: contacts[0]
  }
  
  
  render() {
    return (
      <div className="App">
        hello
      </div>
    );
  }
}

export default App;