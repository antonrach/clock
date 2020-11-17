import React, { useState } from 'react';

const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
}

const Time = (props) => {

    let time = props.currentDate.toLocaleTimeString('en-US', options);

    const updateTime = () => {
        props.newDate();
    }

    setInterval(updateTime, 1000);

    return (
        <div className="time">
            {time}
        </div>
    );
};

export default Time;
