import React from 'react';
import Avatar from '../common/Avatar/Avatar';
import newContactImage from '../../assets/images/new-contact.png';

const Item = ({ contact, onContactItemClick }) => {

    const isActive = () => (
        contact.isActive ? 'item active' : 'item'
    )

    const onClickItem = () => {
        onContactItemClick(contact.id);
    }

    return (
        <div onClick={onClickItem} className={isActive()}>
            <Avatar url={contact.picture.thumbnail || newContactImage} />
            <div className="item-details">
                <div className="item-name">{contact.name}</div>
                <div className="item-phone">{contact.phone}</div>
            </div>
        </div>
    );
};

export default Item;