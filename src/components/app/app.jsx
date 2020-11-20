import React, { useState } from 'react';
import Time from '../time/';
import Day from '../day';
import Weather from '../weather';

function App(){

    let dayDate = new Date();
    const [curDate, setCurDate] = useState(dayDate);

    const [WP, setWP] = useState('');

    const [weatherFetch, updateFetch] = useState(false);

    return(
        <div className={'wallpaper ' + WP}>
            <div className="timecont">
                <Time
                    newDate={() => setCurDate(new Date)}
                    newWallpaper={(classWP) => setWP(classWP)}
                    update={() => updateFetch(!weatherFetch)}
                />
            </div>
            <div className="nextcont">
                <div className="daycont">
                    <Day currentDate={curDate} />
                </div>
                <div className="weathercont">
                    <Weather update={weatherFetch} />
                </div>
            </div>
        </div>
    )
}

export default App;