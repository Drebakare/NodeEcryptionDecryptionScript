'use strict'
const Enigma = require('./enigma');
const enigma = new Enigma("Drebakare");

let encoder = enigma.encode("Dont Panic!");
let decoder = enigma.decode(encoder);
console.log("Encoded: " + encoder);
console.log("decoded: " + decoder);
let qr_status = enigma.barcode(decoder, 'encoder.png');
if (qr_status) {
  console.log("Barcode Generated Successfully");  
}
else{
    console.log("Barcode could not be generated");
}