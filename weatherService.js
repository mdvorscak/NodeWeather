const webService = require("./webService");

function getForecastURL(APIKey, lat, lon){
    return "https://api.forecast.io/forecast/" + APIKey + "/" + lat + "," + lon;
}

function display(weatherObj){
    console.dir(weatherObj.currently);
}

async function getCurrentWeather(APIKey, lat, lon){
    var forecastURL = getForecastURL(APIKey, lat, lon);
    var weatherObj = await webService.call(forecastURL);
    display(weatherObj);
    return weatherObj;
}

module.exports.getCurrentWeather = getCurrentWeather;