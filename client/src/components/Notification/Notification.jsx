import React from 'react';

const Notification = (props) => {
    return (
        <div className={props.class} style={{style: props.style}} role="notification">{props.message}   
        </div>
    );
};

export default Notification;