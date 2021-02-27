let getData= async function(city) {
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=83c4dc5fdd855799cbe90da4a319d8d0`, {mode: 'cors'});
    
    const weatherData= await response.json();

    return weatherData;
}

function createRelevantObj(data) {
    return {
        name: data.name,
        weather: {
            description: data.weather[0].description,
            temp: data.main.temp,
            tempFeels: data.main.feels_like,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            wind: data.wind.speed
        },
        info: {
            country: data.sys.country,
            timezone: data.timezone,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset
        }
    }
}

export {getData, createRelevantObj};