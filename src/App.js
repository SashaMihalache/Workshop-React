import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import Details from './components/details/Details';
import contacts from './helpers/mockData';
import { setContactsToInactive, ContactCreator} from './helpers/contacts';
import {scrollToItem} from './helpers/dom';

import './App.css';

class App extends Component {
  state = {
    contacts: contacts,
    selectedContact: contacts[0],
    isEditMode: false
  }

  onSearch = (e) => {
    const name = e.target.value.toLowerCase();
    this.setState({
      contacts: contacts.filter(item => item.name.toLowerCase().includes(name))
    });
    
  }

  onContactItemClick = (id) => {
    const newContacts = [...this.state.contacts.map(item => {
      item.id === id ? item.isActive = true: item.isActive = false;
      return item;
    })]

    this.setState({
      contacts: newContacts,
      selectedContact: newContacts.find(item => item.id === id)
    })
  }

  onAddContactClick = () => {
    const newContact = ContactCreator();
    this.setState(prevState => ({
      contacts: [
        ...setContactsToInactive(prevState.contacts), 
        newContact
      ],
      selectedContact: newContact
    }));
    
    scrollToItem('contacts-list');
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
            contacts={contacts}
            onSearch={this.onSearch}
            onContactItemClick={this.onContactItemClick}
            onAddContactClick={this.onAddContactClick} />
          <Details 
            selectedContact={selectedContact} 
            isEditMode={isEditMode} />
      </div>
    );
  }
}

export default App;