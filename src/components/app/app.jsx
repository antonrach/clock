import React, { useState } from 'react';
import Time from '../time/';
import Day from '../day';

const setWallpaper = (date) => {
    if((date.getHours() >= 0 && date.getHours() <= 4) || (date.getHours() >= 23 && date.getHours() <= 24)) {
        return 'night';
    }
     else if (date.getHours() >= 5 && date.getHours() <= 10) {
        return 'morning';
    } else if (date.getHours() >= 11 && date.getHours() <= 16) {
        return 'day';
    } else if (date.getHours() >= 17 && date.getHours() <= 22) {
        return 'evening';
    }
}

function App(){
    let date = new Date();
    const [curDate, setCurDate] = useState(date);

    const classWP = setWallpaper(date);

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