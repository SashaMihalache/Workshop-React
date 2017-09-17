import React, { Component } from 'react';
import List from './List';
import Search from '../common/Search/Search';
import Button from '../common/Button/Button';
import './Contacts.css';

class Contacts extends Component {
    state = {
        filter: ''
    }
    
    onSearch = (e) => {
        this.setState({ filter: e.target.value.toLowerCase()});
    }

    filterByName = (item) => {
        return item.name.toLowerCase().includes(this.state.filter);
    }

    render() {
        return (
            <div className='contacts-container'>
                <Search onSearch={this.onSearch} />
                <List
                    contacts={this.props.contacts.filter(this.filterByName)}
                    onContactItemClick={this.props.onContactItemClick} />
                <div className="buttons-container">
                    <Button 
                        icon='fa fa-plus' 
                        color='#4267b2' 
                        onClick={this.props.onAddContactClick} />
                    <Button 
                        icon='fa fa-trash-o'
                        color='#880000'
                        onClick={this.props.onDeleteContactClick} />
                </div>
            </div>
        );
    }
}

export default Contacts;