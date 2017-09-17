import React, { Component } from 'react';
import Contacts from './contacts/Contacts';
import Details from './details/Details';
import contacts from '../helpers/mockData';
import { setContactsToInactive, ContactCreator} from '../helpers/contacts';
import {scrollToItem} from '../helpers/dom';

import './App.css';

class App extends Component {
  state = {
    contacts: contacts,
    selectedContact: contacts[0],
    isEditMode: false
  }

  toggleEditMode = () => this.setState({ isEditMode : !this.state.isEditMode});

  onContactItemClick = (id) => {
    const newContacts = setContactsToInactive(this.state.contacts);
    const newSelectedContact = this.state.contacts.find(item => item.id === id);
    newSelectedContact.isActive = true;

    this.setState({
      contacts: newContacts,
      selectedContact: newSelectedContact
    })
  }

  onAddContactClick = () => {
    const newContact = ContactCreator();
    this.setState(prevState => ({
      contacts: [...setContactsToInactive(prevState.contacts), newContact],
      selectedContact: newContact,
      isEditMode: true
    }));
    scrollToItem('contacts-list');
  }

  onDeleteContactClick = () => {
    if(window.confirm(`You sure u wanna delete ${this.state.selectedContact.name} from your life, fam?`)) {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(item => item.id !== prevState.selectedContact.id),
        selectedContact: prevState.contacts[0]
      }));
    }
  }

  onUpdateContact = (value, type) => {
    const updatedContact = {...this.state.selectedContact};
    updatedContact[type] = value;
    
    
    this.setState({
      contacts: this.state.contacts.map(item => 
        item.id === updatedContact.id ? updatedContact: item
      ),
      selectedContact: updatedContact
    });
  }
  
  render() {
    const {
      contacts,
      selectedContact,
      isEditMode
    } = this.state;

    return (
      <div>
        <h1>Address Book</h1>
        <div className="container">
            <Contacts
              contacts={contacts}
              onContactItemClick={this.onContactItemClick}
              onAddContactClick={this.onAddContactClick}
              onDeleteContactClick={this.onDeleteContactClick} />
            <Details 
              toggleEditMode={this.toggleEditMode}
              onUpdateContact={this.onUpdateContact}
              selectedContact={selectedContact} 
              isEditMode={isEditMode} />
        </div>
      </div>
    );
  }
}

export default App;