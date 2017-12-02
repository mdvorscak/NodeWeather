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

function formatIPAddress(location){
    return `${location.city}, ${location.region_code} ${location.zip_code}, ${location.country_code}`;
}

async function getCurrentLocation(){
    const {promisify} = require('util'); 
    const getIP = promisify(require('external-ip')()); 
    const iplocation = require('iplocation');    
    
    var location;
    try{
        var ip = await getIP();
        location = await iplocation(ip);
        location.formatted = formatIPAddress(location);
    } catch(e) {
        location = {};
    }
    return location;
}

function parseGoogleResults(locObj){
    if(locObj.status == "OK"){
        var firstResult = locObj.results[0];
        var latLon = firstResult.geometry.location;
        return { latitude : latLon.lat, longitude: latLon.lng, formatted: firstResult.formatted_address};
    } else {
        console.warn("Problem contacting the geolocation API: " + locObj.status);
    }
}

async function getLatLon(location){
    var url = getWebserviceURL(location);
    var results = await webService.call(url);
    return parseGoogleResults(results);
}

module.exports = {
    getCurrentLocation: getCurrentLocation,
    getLatLon: getLatLon
};