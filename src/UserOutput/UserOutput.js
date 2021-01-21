import React from 'react';

const userOutput = (props) => {
    const style= {
        backgroundColor: 'white',
        font: 'ingerit',
        border: '1x solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

    return (
        <div style={style}>
            <p>User output name {props.name}!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default userOutput;