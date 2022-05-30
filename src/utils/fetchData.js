let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise ((resolve, reject) => {
        const xhttp = new XMLHttpRequest(); 
        xhttp.open('GET', url_api, true); // con el true le decimos que se maneje de manera asincróna
        xhttp.onreadystatechange = ( () => {
            if (xhttp.readyState === 4){ // esto es para validar que se haya completado la petición
                (xhttp.status === 200) // esto es como un if pero sin declara, se llama validacion ternaria
                    ? resolve(JSON.parse(xhttp.responseText)) // si es verdadero hace esto
                    : reject(new Error('Hay un error en: ' + url_api)) // si es falso esto
            }
        });
        xhttp.send();
    })
} 

module.exports = fetchData;