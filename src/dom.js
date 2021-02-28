import{getData, createRelevantObj} from './data-processing.js';
import { convertToF, getLocalSun } from './helpers.js';

function inputEV() {
    let input= document.querySelector('input[type]');
    input.addEventListener('keypress', function(event) {
        if(event.key === 'Enter') {
            let rawData= getData(input.value)
            .then(function(rawData){
                return createRelevantObj(rawData);
            })
            .then(function(processedData) {
                toggleEV(processedData);
                displayData(processedData);
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
                toggleEV(processedData);
                displayData(processedData);
            })
            .catch(err => console.error(err));
    })
}

function displayData(data) {
    let location= Array.from(document.querySelectorAll('#location > span'));
    location[0].textContent= `${data.name}, ${data.info.country}`;

    let main= Array.from(document.querySelectorAll('#main > span'));
    main[0].textContent= `${data.weather.description}`;
    main[1].textContent= `${data.weather.temp}\u2103`;

    let info1= Array.from(document.querySelectorAll('#info1 > span'));
    info1[0].textContent= `Min: ${data.weather.tempMin}\u2103`;
    info1[1].textContent= `Max: ${data.weather.tempMax}\u2103`;
    info1[2].textContent= `Feels like: ${data.weather.tempFeels}\u2103`;

    let info2= Array.from(document.querySelectorAll('#info2 > span'));
    info2[0].textContent= `Humidity: ${data.weather.humidity}%`;
    info2[1].textContent= `Pressure: ${data.weather.pressure} hPa`;
    info2[2].textContent= `Wind: ${Math.round(data.weather.wind * 3.6)} km/h`;

    let sunSetRise= Array.from(document.querySelectorAll('#sunset-sunrise > span'));
    let sunrise= getLocalSun(data.info.sunrise, data.info.timezone);
    sunSetRise[0].textContent= `Sunrise: ${sunrise.getHours()}:${sunrise.getMinutes()}`;
    let sunset= getLocalSun(data.info.sunset, data.info.timezone);
    sunSetRise[1].textContent= `Sunset: ${sunset.getHours()}:${sunset.getMinutes()}`;
}

function toggleEV(data) {
    let toggle= document.querySelector('#temp-converter');
    toggle.addEventListener('click', function(){
        let temps= Array.from(document.querySelectorAll('.temp'));
        if(toggle.checked) {
            temps[0].textContent=`${data.weather.temp}\u2103`;
            temps[1].textContent=`Min: ${data.weather.tempMin}\u2103`;
            temps[2].textContent=`Max: ${data.weather.tempMax}\u2103`;
            temps[3].textContent=`Feels like: ${data.weather.tempFeels}\u2103`;
        } else {
            temps[0].textContent=`${convertToF(data.weather.temp)}\u2109`;
            temps[1].textContent=`Min: ${convertToF(data.weather.tempMin)}\u2109`;
            temps[2].textContent=`Max: ${convertToF(data.weather.tempMax)}\u2109`;
            temps[3].textContent=`Feels like: ${convertToF(data.weather.tempFeels)}\u2109`;
            //temps.forEach(span => span.textContent= span.textContent.slice(0, -1) + '\u2109');
        }
    })
}

export {inputEV, windowEV, toggleEV};