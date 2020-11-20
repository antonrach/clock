import React, { useEffect, useState } from 'react';

const api = {
    key: '8db32369cc3957a9e227f8422bc114df',
    base: 'http://api.openweathermap.org/data/2.5/',
}

let loc;

const Weather = (props) => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState('');
    const [wellcome, setWellcome] = useState(' _active');

    const search = (query, erase) => {
        if(query !== '') {
            setWellcome('');
            setError('');
            setSuccess('');
            setLoading(' _active');
            loc = query;
            fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
                .then(response => response.json())
                .then(result => {
                    if(result.cod.toString().slice(0, 1) === "4" || result.cod.toString().slice(0, 1) === "5") {
                        setLoading('');
                        setError(' _active');
                    } else {
                        setWeather(result);
                        setLoading('');
                        setSuccess(' _active');
                        if(erase === true) {
                            setQuery('');
                        }
                    }
                })
                .catch(() => {debugger; setLoading(''); setError(' _active')})
        }
    }

    useEffect(() => {
        if(loc !== undefined) {
            search(loc, false);
        }
    }, [props.update])

    return (
        <div className="weather">
            <input
                type="text"
                placeholder='Search...'
                value={query}
                onChange={event => setQuery(event.target.value)}
                onKeyPress={(event => {if(event.key === 'Enter'){search(query, true)}})}
            />
            <button
                type="button"
                className="gobutton"
                onClick={() => search(query, true)}
            >
                Go
            </button>
            {((typeof weather !== "undefined" && typeof weather.main !== "undefined")) ?
                (<div className={"enter" + success}>
                    <div className="container">
                        <div className="datainfo">
                            <div className="location">{weather.name}, {weather.sys.country}</div>
                            <div className="temperature">{Math.round(weather.main.temp)} °C</div>
                            <div className="status">{weather.weather[0].main}</div>
                        </div>
                    </div>
                </div>) : ( <div className={"enter" + success}></div> )
            }
            <div className={"error" + error}>
                <div className="container">
                    <div className="datainfo">
                        Sorry, cannot load weather data.
                        Please, check your Internet connection or the
                        proper spelling of the entered location.
                    </div>
                </div>
            </div>
            <div className={"loading" + loading}>
                <div className="container">
                    <div className="datainfo">
                        Loading...
                    </div>
                </div>
            </div>
            <div className={"wellcome" + wellcome}>
                <div className="container">
                    <div className="datainfo">
                        Hi! Enter any location and check out
                        current weather anywhere in the world :)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;