const {send} = require('./request');
const {read} = require('./response');

//ECMA script
// import {send} from './request.msj';
// import {read} from './response.msj';


function makeRequest(url,data){
send (url,data);
return read();
}

const responseData= makeRequest('https://google.com','Hello');
console.log(responseData);

//THE FILES HAS TO USE .msj EXTENSION instead of .js.  
//(Example: https.msj) y en el import tambien debe figurar el sufijo en el path