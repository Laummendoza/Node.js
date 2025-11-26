const axios = require("axios");  




    axios.get("https://www.google.com/?hl=es&zx=1764159070262&no_sw_cr=1")
.then ((response)=>{
    console.log(response);
})
 .catch((error)=>{
    console.log(error);
 });    