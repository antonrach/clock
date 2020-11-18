import React, { useState } from 'react';
import Time from '../time/';
import Day from '../day';

function App(){

    let dayDate = new Date();
    const [curDate, setCurDate] = useState(dayDate);

    const [WP, setWP] = useState('');

    return(
        <div className={'wallpaper ' + WP}>
            <div className="timecont">
                <Time newDate={() => setCurDate(new Date)} newWallpaper={(classWP) => setWP(classWP)} />
            </div>
            <div className="nextcont">
                <div className="daycont">
                    <Day currentDate={curDate} />
                </div>
            </div>
        </div>
    )
}

export default App;