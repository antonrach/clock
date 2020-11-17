import React, { useState } from 'react';
import Time from '../time/';
import Day from '../day';

let classWP;

const setWallpaper = (date) => {
    if(classWP === undefined) {
        if((date.getHours() >= 0 && date.getHours() <= 4) || (date.getHours() >= 23 && date.getHours() <= 24)) {
            classWP = 'night';
        }
         else if (date.getHours() >= 5 && date.getHours() <= 10) {
            classWP = 'morning';
        } else if (date.getHours() >= 11 && date.getHours() <= 16) {
            classWP = 'day';
        } else if (date.getHours() >= 17 && date.getHours() <= 22) {
            classWP = 'evening';
        }
    } else {
        if((date.getHours() >= 0 && date.getHours() <= 4 && date.getMinutes() === 0 && date.getSeconds() === 0) || (date.getHours() >= 23 && date.getHours() <= 24 && date.getMinutes() === 0 && date.getSeconds() === 0)) {
            classWP = 'night';
        }
         else if (date.getHours() >= 5 && date.getHours() <= 10 && date.getMinutes() === 0 && date.getSeconds() === 0) {
            classWP = 'morning';
        } else if (date.getHours() >= 11 && date.getHours() <= 16 && date.getMinutes() === 0 && date.getSeconds() === 0) {
            classWP = 'day';
        } else if (date.getHours() >= 17 && date.getHours() <= 22 && date.getMinutes() === 0 && date.getSeconds() === 0) {
            classWP = 'evening';
        }
    }
}

function App(){
    let date = new Date();
    const [curDate, setCurDate] = useState(date);

    setWallpaper(date);

    return(
        <div className={'wallpaper ' + classWP}>
            <div className="timecont">
                <Time currentDate={curDate} newDate={() => setCurDate(new Date)} />
            </div>
            <div className="nextcont">
                <div className="daycont">
                    <Day currenDate={curDate} newDate={() => setCurDate(new Date)}/>
                </div>
            </div>
        </div>
    )
}

export default App;