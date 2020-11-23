import React, { useState, useEffect } from 'react';

const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
}

let updatedOnZero = false;
let newDayUpdZero = false;
let updFetchZero = false;

let classWP;

const setNewDay = (date, props) => {
    if((date.getHours() === 0
    || date.getHours() === 24)
    && date.getMinutes() === 0
    && (date.getSeconds() === 0
    || date.getSeconds() === 1
    || date.getSeconds() === 2)) {
        if(date.getSeconds() === 0) {
            newDayUpdZero = true;
            props.newDate();
        } else if(date.getSeconds() === 1) {
            if(newDayUpdZero) {
                newDayUpdZero = false;
            } else {
                props.newDate();
            }
        } else if(date.getSeconds() === 2) {
            if(newDayUpdZero) {
                newDayUpdZero = false;
            }
        }
    }
}

const setWallpaper = (date, props) => {
    if(classWP === undefined) {
        if((date.getHours() >= 0
        && date.getHours() <= 4)
        || (date.getHours() >= 23
        && date.getHours() <= 24)) {
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
        if((date.getHours() >= 0
        && date.getHours() <= 4
        && date.getMinutes() === 0
        && (date.getSeconds() === 0
        || date.getSeconds() === 1
        || date.getSeconds() === 2)) 
        || (date.getHours() >= 23
        && date.getHours() <= 24
        && date.getMinutes() === 0
        && (date.getSeconds() === 0
        || date.getSeconds() === 1
        || date.getSeconds() === 2))) {
            if(date.getSeconds() === 0){
                updatedOnZero = true;
                classWP = 'night';
                props.newWallpaper('night');
            } else if (date.getSeconds() === 1) {
                if(updatedOnZero) {
                    updatedOnZero = false;
                } else {
                    classWP = 'night';
                    props.newWallpaper('night');
                }
            } else if (date.getSeconds() === 2) {
                if(updatedOnZero) {
                    updatedOnZero = false;
                }
            }
        }
         else if (date.getHours() >= 5
        && date.getHours() <= 10
        && date.getMinutes() === 0
        && (date.getSeconds() === 0
        || date.getSeconds() === 1
        || date.getSeconds() === 2)) {
            if(date.getSeconds() === 0){
                updatedOnZero = true;
                classWP = 'morning';
                props.newWallpaper('morning');
            } else if (date.getSeconds() === 1) {
                if(updatedOnZero) {
                    updatedOnZero = false;
                } else {
                    classWP = 'morning';
                    props.newWallpaper('morning');
                }
            } else if (date.getSeconds() === 2) {
                if(updatedOnZero) {
                    updatedOnZero = false;
                }
            }
        } else if (date.getHours() >= 11
        && date.getHours() <= 16
        && date.getMinutes() === 0
        && (date.getSeconds() === 0
        || date.getSeconds() === 1
        || date.getSeconds() === 2)) {
            if(date.getSeconds() === 0){
                updatedOnZero = true;
                classWP = 'day';
                props.newWallpaper('day');
            } else if (date.getSeconds() === 1) {
                if(updatedOnZero) {
                    updatedOnZero = false;
                } else {
                    classWP = 'day';
                    props.newWallpaper('day');
                }
            } else if (date.getSeconds() === 2) {
                if(updatedOnZero) {
                    updatedOnZero = false;
                }
            }
        } else if (date.getHours() >= 17
        && date.getHours() <= 22
        && date.getMinutes() === 0
        && (date.getSeconds() === 0
        || date.getSeconds() === 1
        || date.getSeconds() === 2)) {
            if(date.getSeconds() === 0){
                updatedOnZero = true;
                classWP = 'evening';
                props.newWallpaper('evening');
            } else if (date.getSeconds() === 1) {
                if(updatedOnZero) {
                    updatedOnZero = false;
                } else {
                    classWP = 'evening';
                    props.newWallpaper('evening');
                }
            } else if (date.getSeconds() === 2) {
                if(updatedOnZero) {
                    updatedOnZero = false;
                }
            }
        } /*else if (date.getMinutes() === 31) {
            console.log(date.getMilliseconds());
        }*/
    }
}

const setFetch = (date, props) => {
    if((date.getMinutes() === 0
    && (date.getSeconds() === 0
    || date.getSeconds() === 1
    || date.getSeconds() === 2))
    || (date.getMinutes() === 30
    && (date.getSeconds() === 0
    || date.getSeconds() === 1
    || date.getSeconds() === 2))) {
        if(date.getSeconds() === 0) {
            updFetchZero = true;
            props.update();
        } else if(date.getSeconds() === 1) {
            if(updFetchZero) {
                updFetchZero = false;
            } else {
                props.update();
            }
        } else if(date.getSeconds() === 2) {
            if(updFetchZero) {
                updFetchZero = false;
            }
        }
    }
}

const Time = (props) => {

    const [curTime, setCurTime] = useState(new Date());

    useEffect(() => {
        setNewDay(curTime, props);
    }, [curTime])

    useEffect(() => {
        setWallpaper(curTime, props);
    }, [curTime])

    useEffect(() => {
        setFetch(curTime, props);
    }, [curTime])

    let time = curTime.toLocaleTimeString('en-US', options);

    const updateTime = () => {
        setCurTime(new Date());
    }

    useEffect(() => {
        setInterval(updateTime, 1000);  
    }, []);
    return (
        <div className="time">
            {time}
        </div>
    );
};

export default Time;
