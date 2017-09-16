import React from 'react';
import Avatar from '../common/Avatar/Avatar';

const Item = ({ contact, onContactItemClick }) => {

    const isActive = () => (
        contact.isActive ? 'item active' : 'item'
    )

    return (
        <div onClick={() => onContactItemClick(contact.id)} className={isActive()}>
            <Avatar url={contact.picture.thumbnail} />
            <div className="item-details">
                <div className="item-name">{contact.name}</div>
                <div className="item-phone">{contact.phone}</div>
            </div>
        </div>
    );
};

export default Item;