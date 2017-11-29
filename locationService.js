const webService = require("./webService");

function getWebserviceURL(address){
    return "https://maps.googleapis.com/maps/api/geocode/json?address=" + address;
}

//Parse the location, then return the results
function parseLocation(locObj){
    //Use the first result from Google
    if(locObj.status == "OK"){
        return locObj.results[0];
    } else {
        console.warn("Problem contacting the geolocation API: " + locObj.status);
    }
}

async function getLocation(location){
    var url = getWebserviceURL(location);
    var results = await webService.call(url);
    return parseLocation(results);
}

function parseLatLon(locObj){
    if(locObj.status == "OK"){
        return locObj.results[0].geometry.location;
    } else {
        console.warn("Problem contacting the geolocation API: " + locObj.status);
    }
}

async function getLatLon(location){
    var url = getWebserviceURL(location);
    var results = await webService.call(url);
    return parseLatLon(results);
}

module.exports.getLocation = getLocation;
module.exports.getLatLon = getLatLon;