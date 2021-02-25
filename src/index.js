let getData= async function(city) {
    let response= await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=83c4dc5fdd855799cbe90da4a319d8d0`, {mode: 'cors'});
    console.log(response);
}

getData('Ljubljana');