import React from 'react'

const Notification = ({ message, type }) => {
    const color = type ? 'green' : 'red';

    return (
        <div style={{ backgroundColor: `${color}` }} className='notificationCard'>
            <p>{message}</p>
        </div>
    )
}

export default Notification