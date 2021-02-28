function convertToC(K) {
    let c= ((K-273.15)*1.8)+32;
    return c;
}

function convertToF(C) {
    let f= (C/5) * 9 + 32;
    return Math.round(f);
}

function getLocalSun(sun, timezone) {
    return new Date((sun + timezone - 3600) * 1000);
}

export {convertToC, convertToF, getLocalSun}