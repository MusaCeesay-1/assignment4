import React from 'react';

const TextComponent = ({ label, value }) => {
    return (
        <div className="text-components">
            <div style={{ fontWeight: 'bold' }}>{label}:</div>
            <div>{value}</div>
        </div>
    );
};

export default TextComponent;
