import React from 'react';

const Comments = (props) => {
    const { name, email } = props.comment;
    return (
        <div>
            <h2>Name: {name}</h2>
            <h4>email: {email}</h4>
        </div>
    );
};

export default Comments;