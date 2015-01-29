var webService = require("./webService");

function callWebservice(address, callback){
    var locationURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address;
    webService.call(locationURL, callback);  
}

function getLocation(location, callback){
    //Parse the location, then call the callback
    function parseLocation(locObj){
        //Use the first result from Google
        if(locObj.status == "OK"){
            callback(locObj.results[0]);
        } else {
            console.warn("Problem contacting the geolocation API: " + locObj.status);
        }
    }
    
    callWebservice(location, parseLocation);
}

function getLatLon(location, callback){
    function parseLatLon(locObj){
        if(locObj.status == "OK"){
            callback(locObj.results[0].geometry.location);
        } else {
            console.warn("Problem contacting the geolocation API: " + locObj.status);
        }
    }
    
    callWebservice(location, parseLatLon);
}

module.exports.getLocation = getLocation;
module.exports.getLatLon = getLatLon;