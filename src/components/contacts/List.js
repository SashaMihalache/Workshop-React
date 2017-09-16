import React from 'react';
import Item from './Item';

const List = ({ contacts }) => {
    return (
        <div className='contacts-list'>
            {
                contacts.map(contact => (
                    <Item key={contact.id} contact={contact} />
                ))
            }
        </div>
    );
};

export default List;