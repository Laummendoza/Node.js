const request = require('./requestR');
const read = require('./responseR');


function makeRequest(url,data){
request.send (url,data);
return read();
}

const responseData= makeRequest('https://google.com','Hello');
console.log(responseData);