import React, { useState} from 'react';

const options = {
    month: 'short',
    day: 'numeric',
    weekday: 'long',
}

const yearOptions = {
    year: 'numeric'
}

const Day = (props) => {

    let day = props.currentDate.toLocaleString('en-US', options);
    let year = props.currentDate.toLocaleString('en-US', yearOptions);
    
    return (
        <div className="daynow">
            <div className="day1">{day}</div>
            <div className="year">{year}</div>
        </div>
    );
};

export default Day;
