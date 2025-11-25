module.exports.REQUEST_TIMEOUT=500;
function encrypt(data) {
    return "encrypted data";
}


module.exports.send = function send(url, data) {
   const encryptedData = encrypt(data);
   console.log("sending ${encryptedData} to ${url}");
}

// hacemos las anotaciones de module.export directamente en la funcion como "prefijos" 
// y tambien agregamos la primera linea para indicar que cuando la peticion 
// no tenga respuesta dentro de los 500ms se aboratara la peticion. 
// Incluso podemos omitir module.export por solo exports ya que exports apunta a
//  modulo directamente porque es una funcion de este.