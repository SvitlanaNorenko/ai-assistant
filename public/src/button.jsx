import React from "react";

const Button = () => {
    const buttonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSieze: '16px',    

    };

    return(
        <button style={buttonStyle}>
            Schreibassistent
        </button>
    );
};