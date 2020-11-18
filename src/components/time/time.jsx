import React, { useState, useEffect } from 'react';

const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
}

let classWP;

const setNewDay = (date, props) => {
    if((date.getHours() === 0 || date.getHours() === 24) && date.getMinutes() === 0 && date.getSeconds() === 0 && date.getMilliseconds() === 0) {
        props.newDate();
    }
}

const setWallpaper = (date, props) => {
    if(classWP === undefined) {
        if((date.getHours() >= 0 && date.getHours() <= 4) || (date.getHours() >= 23 && date.getHours() <= 24)) {
            classWP = 'night';
            props.newWallpaper('night');
        }
         else if (date.getHours() >= 5 && date.getHours() <= 10) {
            classWP = 'morning';
            props.newWallpaper('morning');
        } else if (date.getHours() >= 11 && date.getHours() <= 16) {
            classWP = 'day';
            props.newWallpaper('day');
        } else if (date.getHours() >= 17 && date.getHours() <= 22) {
            classWP = 'evening';
            props.newWallpaper('evening');
        }
    } else {
        if((date.getHours() >= 0 && date.getHours() <= 4 && date.getMinutes() === 0 && date.getSeconds() === 0 && date.getMilliseconds() === 0) || (date.getHours() >= 23 && date.getHours() <= 24 && date.getMinutes() === 0 && date.getSeconds() === 0 && date.getMilliseconds() === 0)) {
            classWP = 'night';
            props.newWallpaper('night');
        }
         else if (date.getHours() >= 5 && date.getHours() <= 10 && date.getMinutes() === 0 && date.getSeconds() === 0 && date.getMilliseconds() === 0) {
            classWP = 'morning';
            props.newWallpaper('morning');
        } else if (date.getHours() >= 11 && date.getHours() <= 16 && date.getMinutes() === 0 && date.getSeconds() === 0 && date.getMilliseconds() === 0) {
            classWP = 'day';
            props.newWallpaper('day');
        } else if (date.getHours() >= 17 && date.getHours() <= 22 && date.getMinutes() === 0 && date.getSeconds() === 0 && date.getMilliseconds() === 0) {
            classWP = 'evening';
            props.newWallpaper('evening');
        }
    }
}

const Time = (props) => {

    let date = new Date();
    const [curTime, setCurTime] = useState(date);

    useEffect(() => {
        setNewDay(date, props);
    })

    useEffect(() => {
        setWallpaper(date, props);
    })

    let time = date.toLocaleTimeString('en-US', options);

    const updateTime = () => {
        date = new Date();
        setCurTime(date);
    }

    setInterval(updateTime, 1000);

    return (
        <div className="time">
            {time}
        </div>
    );
};

export default Time;
