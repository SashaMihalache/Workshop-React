import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import Details from './components/details/Details';
import contacts from './helpers/mockData';

import './App.css';

class App extends Component {
  state = {
    contacts: contacts,
    selectedContact: contacts[0],
    isEditMode: false
  }
  
  render() {
    const {
      contacts,
      selectedContact,
      isEditMode
    } = this.state;

    return (
      <div className="container">
          <Contacts
            contacts={contacts} />
          <Details 
            selectedContact={selectedContact} 
            isEditMode={isEditMode} />
      </div>
    );
  }
}

export default App;