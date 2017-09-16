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
                <List
                    contacts={this.props.contacts}
                    onContactItemClick={this.props.onContactItemClick} />
                <div className="buttons-container">
                    <Button icon='fa fa-plus' color='#4267b2'/>
                    <Button icon='fa fa-trash-o'color='#880000' />
                </div>
            </div>
        );
    }
}

export default Contacts;