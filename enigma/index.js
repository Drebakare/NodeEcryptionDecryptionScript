'use strict'
const crypto = require('crypto');
const fs = require('fs');
const qr = require('qr-image')

module.exports = function (key) {
    this.key = key;
    return {
        encode : (str) => {
            let encoder = crypto.createCipher('aes-256-ctr',this.key);
            return encoder.update(str, 'utf8', 'hex');
        },
        decode : (str) => {
            let decoder = crypto.createDecipher('aes-256-ctr', this.key);
            return decoder.update(str, 'hex', 'utf8');
        },
        'barcode': (data, file) => {
            let data_to_encode  = data || null;
            let file_to_display  = file || null;
            if (data_to_encode !==null && file_to_display !== null) {
                let barcode = qr.image(data_to_encode, { type: "png" });
                barcode.pipe(fs.createWriteStream(file_to_display));
                return true;
            }
            else{
                return false
            }
             
        }
    }
}