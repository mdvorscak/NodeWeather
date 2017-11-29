const req = require('requisition');

async function call(url){
    var response = await req(url);
    var body = await response.json();
    return body;
}

module.exports.call = call;