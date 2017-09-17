import React from 'react';
import './Button.css';

const Button = ({icon, color, onClick}) => {
    const styles = {
        color
    }

    return (
        <div className="button" style={styles} onClick={onClick}>
            <i className={icon}></i>
        </div>
    );
};

export default Button;