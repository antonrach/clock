import React, { useState } from 'react';

const api = {
    key: '8db32369cc3957a9e227f8422bc114df',
    base: 'http://api.openweathermap.org/data/2.5/',
}

const Weather = () => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState('');
    const [wellcome, setWellcome] = useState(' _active');

    const search = () => {
        if(query !== '') {
            setWellcome('');
            setError('');
            setSuccess('');
            setLoading(' _active')
            fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
                .then(response => response.json())
                .then(result => {
                    if(+result.cod === 404) {
                        setLoading('');
                        setError(' _active');
                    } else {
                        setWeather(result);
                        setLoading('');
                        setSuccess(' _active');
                        setQuery('');
                    }
                })
                .catch(() => {setLoading(''); setError(' _active')})
        }
    }

    return (
        <div className="weather">
            <input
                type="text"
                placeholder='Search...'
                value={query}
                onChange={event => setQuery(event.target.value)}
                onKeyPress={(event => {if(event.key === 'Enter'){search()}})}
            />
            <button
                type="button"
                className="gobutton"
                onClick={search}
            >
                Go
            </button>
            {((typeof weather !== "undefined" && typeof weather.main !== "undefined")) ?
                (<div className={"enter" + success}>
                    <div className="location">{weather.name}, {weather.sys.country}</div>
                    <div className="temperature">{Math.round(weather.main.temp)} °C</div>
                    <div className="status">{weather.weather[0].main}</div>
                </div>) : ( <div className={"enter" + success}></div> )
            }
            <div className={"error" + error}>Sorry, cannot load weather data. Please, check your Internet connection or the proper spelling of the entered location.</div>
            <div className={"loading" + loading}>Loading...</div>
            <div className={"wellcome" + wellcome}>Hi! Enter any location and check out current weather anywhere in the world :)</div>
        </div>
    )
}

export default Weather;