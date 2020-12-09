const crypto = require('crypto');

let generateToken = () => {
    let generateNewToken = crypto.randomBytes(64).toString('hex');
   
    return generateNewToken;
}

module.exports = generateToken;