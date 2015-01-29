var webService = require("./webService");

function callWebservice(APIKey, lat, lon, callback){
    var forecastURL = "https://api.forecast.io/forecast/" + APIKey + "/" + lat + "," + lon;
    webService.call(forecastURL, callback);  
}

function getCurrentWeather(APIKey, lat, lon, callback){
    //Parse the location, then call the callback
    function parseWeather(weatherObj){
        console.dir(weatherObj.currently);
    }
    
    callWebservice(APIKey, lat, lon, parseWeather);
}

module.exports.getCurrentWeather = getCurrentWeather;