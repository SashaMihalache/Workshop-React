import React from 'react';
import './Field.css';

const Field = ({ onUpdateData, isEditMode, type, size, text}) => {
    const updateData = (e) => {
        onUpdateData(e.target.value, type);
    }
    
    const getSize = () => size === 'large' ? 'field large' : 'field';
    
    const renderField = () => {
        if(isEditMode) 
            return <input 
                className={getSize()} 
                value={text}
                onChange={updateData}
                placeholder={type} />
        else
            return <div className={getSize()}>{text}</div>
    }
    return renderField();
};

export default Field;