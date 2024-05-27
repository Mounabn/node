// var http = require("http");


// http.createServer(function (request, response) {
  
//     response.writeHead('<h1>Hello Node!!!!</h1>\n');
    
//     // Send the response body as "Hello World"
//     response.end();
//  }).listen(3000);
 
//  console.log('Server running at http://127.0.0.1:3000
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('<h1>Hello Node!!!!</h1>\n'); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 8080


// Étape 1 : Créer le fichier "welcome.txt" avec une ligne "Hello Node"
const fs = require('fs');
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('Le fichier "welcome.txt" a été créé avec succès.');
  });

// Étape 2 : Lire le contenu de "welcome.txt" et l'afficher dans la console
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenu de "welcome.txt":');
    console.log(data);
  });
 


