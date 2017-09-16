import React from 'react';
import Item from './Item';

const List = ({ contacts, onContactItemClick }) => {
    return (
        <div className='contacts-list'>
            {
                contacts.map(contact => (
                    <Item 
                        key={contact.id} 
                        contact={contact} 
                        onContactItemClick={onContactItemClick} />
                ))
            }
        </div>
    );
};

export default List;