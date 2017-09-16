import React from 'react';
import './Button.css';

const Button = ({icon, color}) => {
    const styles = {
        color
    }

    return (
        <div className="button" style={styles}>
            <i className={icon}></i>
        </div>
    );
};

export default Button;