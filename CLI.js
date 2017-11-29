const locationService = require("./locationService");
const weatherService = require("./weatherService");
const config = require('./API_KEYS');

(async ()=>{
    const location = process.argv.slice(2).join(" ");
    const latLonObj = await locationService.getLatLon(location);
    weatherService.getCurrentWeather(config.weatherService.APIKey, latLonObj.lat, latLonObj.lng);
})();
