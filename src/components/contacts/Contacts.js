import React, { Component } from 'react';
import List from './List';
import Search from '../common/Search/Search';
import Button from '../common/Button/Button';
import './Contacts.css';

class Contacts extends Component {
    render() {
        return (
            <div className='contacts-container'>
              <Search onSearch={this.props.onSearch} />
              <List contacts={this.props.contacts} />
              <Button />
              <Button />
            </div>
        );
    }
}

export default Contacts;