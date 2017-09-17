import React, { Component } from 'react';
import Avatar from '../common/Avatar/Avatar';
import Field from '../common/Field/Field';
import Button from '../common/Button/Button';
import './Details.css';
import newContactImage from '../../assets/images/new-contact.png';

class Details extends Component {
    handleButtonIcon = () => this.props.isEditMode ? 'fa fa-check' : 'fa fa-pencil';

    render() {
        const { 
            selectedContact, 
            isEditMode, 
            onUpdateContact,
            toggleEditMode
        } = this.props;

        return (
            <div className='details-container'>
                <Avatar url={selectedContact.picture.large || newContactImage}/>
                <div className="main">
                    <Field 
                        onUpdateData={onUpdateContact}
                        isEditMode={isEditMode} 
                        type='name'
                        size='large' 
                        text={selectedContact.name} />
                </div>
                <div className="secondary">
                    <Field 
                        onUpdateData={onUpdateContact}
                        isEditMode={isEditMode}
                        type='email'
                        text={selectedContact.email} />
                    <Field 
                        onUpdateData={onUpdateContact}
                        isEditMode={isEditMode}
                        type='phone'
                        text={selectedContact.phone} />
                    <Field 
                        onUpdateData={onUpdateContact}
                        isEditMode={isEditMode}
                        type='address'
                        text={selectedContact.address} />
                    <Field 
                        onUpdateData={onUpdateContact}
                        isEditMode={isEditMode}
                        type='notes'
                        text={selectedContact.notes} />
                </div>                
                <div className="actions">
                    <Button onClick={toggleEditMode} icon={this.handleButtonIcon()} />
                </div>
            </div>
        );
    }
}

export default Details;