const webService = require("./webService");

function getForecastURL(APIKey, lat, lon){
    return "https://api.forecast.io/forecast/" + APIKey + "/" + lat + "," + lon;
}

function formatCurrentWeather(weather){
    return `It is currently ${weather.summary.toLowerCase()} with a temperature of ${Math.round(weather.temperature)}°F`;
}

async function getCurrentWeather(APIKey, lat, lon){
    var forecastURL = getForecastURL(APIKey, lat, lon);
    var weatherObj = await webService.call(forecastURL);
    weatherObj.formatted = formatCurrentWeather(weatherObj.currently);
    return weatherObj;
}

module.exports.getCurrentWeather = getCurrentWeather;