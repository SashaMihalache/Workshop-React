import React from 'react';
import Avatar from '../common/Avatar/Avatar';

const Item = ({ contact }) => {
    return (
        <div className='item'>
            <Avatar url={contact.picture.thumbnail} />
            <div className="item-details">
                <div className="item-name">{contact.name}</div>
                <div className="item-phone">{contact.phone}</div>
            </div>
        </div>
    );
};

export default Item;