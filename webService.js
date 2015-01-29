var https = require("https");

function printError(error){
    console.error(error.message);
}

function call(url, callback){
     https.get(url, function responseCallback(response){
        var data = "";
        //Read data
        response.on("data", function dataChunkHandler(chunk){
            data += chunk;
        }).on("end", function endOfDataHandler(){
            if(response.statusCode){
                try {
                    var dataObj = JSON.parse(data);
                    callback(dataObj);
                } catch (error){
                    printError(error);
                }
            } else{
                var errorMsg = "There was an error getting contacting the Webservice at " + url + ". (" + http.STATUS_CODES[response.statusCode] + ")";
                printError({message: errorMsg});
            }
        });
        
        
    }).on("error", printError);
}

module.exports.call = call;