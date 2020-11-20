import React, { useState, useEffect } from 'react';

const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
}

let classWP;

const setNewDay = (date, props) => {
    if((date.getHours() === 0 || date.getHours() === 24) && date.getMinutes() === 0 && (date.getSeconds() === 0 || date.getSeconds() === 1)) {
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
        if((date.getHours() >= 0 && date.getHours() <= 4 && date.getMinutes() === 0 && (date.getSeconds() === 0 || date.getSeconds() === 1)) || (date.getHours() >= 23 && date.getHours() <= 24 && date.getMinutes() === 0 && (date.getSeconds() === 0 || date.getSeconds() === 1))) {
            classWP = 'night';
            props.newWallpaper('night');
        }
         else if (date.getHours() >= 5 && date.getHours() <= 10 && date.getMinutes() === 0 && (date.getSeconds() === 0 || date.getSeconds() === 1)) {
            classWP = 'morning';
            props.newWallpaper('morning');
        } else if (date.getHours() >= 11 && date.getHours() <= 16 && date.getMinutes() === 0 && (date.getSeconds() === 0 || date.getSeconds() === 1)) {
            classWP = 'day';
            props.newWallpaper('day');

        } else if (date.getHours() >= 17 && date.getHours() <= 22 && date.getMinutes() === 0 && (date.getSeconds() === 0 || date.getSeconds() === 1)) {
            classWP = 'evening';
            props.newWallpaper('evening');
        } /*else if (date.getMinutes() === 31) {
            console.log(date.getMilliseconds());
        }*/
    }
}

const Time = (props) => {

    const [curTime, setCurTime] = useState(new Date());

    useEffect(() => {
        setNewDay(curTime, props);
    })

    useEffect(() => {
        setWallpaper(curTime, props);
    })

    let time = curTime.toLocaleTimeString('en-US', options);

    const updateTime = () => {
        setCurTime(new Date());
    }

    useEffect(() => {
        setTimeout(updateTime, 1000);  
    }, [curTime]);
    return (
        <div className="time">
            {time}
        </div>
    );
};

export default Time;
