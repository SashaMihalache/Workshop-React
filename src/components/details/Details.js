import React, { Component } from 'react';
import Avatar from '../common/Avatar/Avatar';
import Field from '../common/Field/Field';
import Button from '../common/Button/Button';
import './Details.css';

class Details extends Component {
    render() {
        return (
            <div className='details-container'>
                <Avatar />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Button />
                <Button />
            </div>
        );
    }
}

export default Details;