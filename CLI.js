#!/usr/bin/env node
const argv = require('argv');
const locationService = require('./locationService');
const weatherService = require('./weatherService');
const config = require('./API_KEYS');
const package = require('./package');

argv.option({
    name: 'location',
    short: 'l',
    type: 'string',
    description: 'Location to get the weather for. If omitted, your current location (of your IP) will be used.',
    example: "'CLI --location=Chicago,IL' or 'script -l 60606'"
});
//TODO: Add timeframe options: currently, minutely, hourly, and daily (only provides current timeframe)
argv.version(package.version);
argv.info('This script is used to get the current weather for a given location');

var args = argv.run();


(async ()=>{
    var givenLocation = args.options.location;
    var locationObject;
    if(givenLocation){
        locationObject = await locationService.getLatLon(givenLocation);
    } else {
        locationObject = await locationService.getCurrentLocation();
    }
    console.log(`Getting weather for ${locationObject.formatted}`);
    var weather = await weatherService.getCurrentWeather(config.weatherService.APIKey, locationObject.latitude, locationObject.longitude);
    console.log(weather.formatted);
})();
