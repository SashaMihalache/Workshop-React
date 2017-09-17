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
      contacts: [...setContactsToInactive(prevState.contacts), newContact],
      selectedContact: newContact,
      isEditMode: true
    }));
    scrollToItem('contacts-list');
  }

  onDeleteContactClick = () => {
    const choice = window.confirm(`You sure u wanna delete ${this.state.selectedContact.name} from your life, fam?`);
    if(choice) {
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
              onSearch={this.onSearch}
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