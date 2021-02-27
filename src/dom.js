import{getData, createRelevantObj} from './data-processing.js';

function inputEV() {
    let input= document.querySelector('input[type]');
    input.addEventListener('keypress', function(event) {
        if(event.key === 'Enter') {
            let rawData= getData(input.value)
            .then(function(rawData){
                return createRelevantObj(rawData);
            })
            .then(function(processedData) {
                displayData(processedData);
                console.log(processedData)
            })
            .catch(err => console.error(err));
        }
    })
}

function windowEV() {
    let input= document.querySelector('input[type]');
    window.addEventListener('load', function(event) {
        let value= input.value;
        if(input.value === '') {
            value= 'Ljubljana';
        }
        let rawData= getData(value)
            .then(function(rawData){
                return createRelevantObj(rawData);
            })
            .then(function(processedData) {
                displayData(processedData);
                console.log(processedData)
            })
            .catch(err => console.error(err));
    })
}

function displayData(data) {
    let location= Array.from(document.querySelectorAll('#location > span'));
    location[0].textContent= `${data.name}, ${data.info.country}`;

    let main= Array.from(document.querySelectorAll('#main > span'));
    main[0].textContent= `${data.weather.description}`;
    main[1].textContent= `${data.weather.temp}`;

    let info1= Array.from(document.querySelectorAll('#info1 > span'));
    info1[0].textContent= `Min: ${data.weather.tempMin}`;
    info1[1].textContent= `Max: ${data.weather.tempMax}`;
    info1[2].textContent= `Feels like: ${data.weather.tempFeels}`;

    let info2= Array.from(document.querySelectorAll('#info2 > span'));
    info2[0].textContent= `Humidity: ${data.weather.humidity}%`;
    info2[1].textContent= `Pressure: ${data.weather.pressure} hPa`;
    info2[2].textContent= `Wind: ${Math.round(data.weather.wind * 3.6)} km/h`;

    let sunSetRise= Array.from(document.querySelectorAll('#sunset-sunrise > span'));
    let sunrise= new Date((data.info.sunrise + data.info.timezone - 3600) * 1000);
    console.log(sunrise);
    sunSetRise[0].textContent= `Sunrise: ${sunrise.getHours()}:${sunrise.getMinutes()}`;
    let sunset= new Date((data.info.sunset + data.info.timezone - 3600) * 1000);
    console.log(sunset);
    sunSetRise[1].textContent= `Sunset: ${sunset.getHours()}:${sunset.getMinutes()}`;
}

export {inputEV, windowEV};