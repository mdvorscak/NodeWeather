var locationService = require("./locationService");
var weatherService = require("./weatherService");
var config = require('./API_KEYS');

var location = process.argv.slice(2).join(" ");
locationService.getLatLon(location, function latLonCallback(latLonObj){
    weatherService.getCurrentWeather(config.weatherService.APIKey, latLonObj.lat, latLonObj.lng, function(){});
});