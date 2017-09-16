import React, { Component } from 'react';
import List from './List';
import Search from '../common/Search/Search';
import Button from '../common/Button/Button';
import './Contacts.css';

class Contacts extends Component {
    render() {
        return (
            <div className='contacts-container'>
              Contacts Container
              <Search />
              <List />
              <Button />
              <Button />
            </div>
        );
    }
}

export default Contacts;