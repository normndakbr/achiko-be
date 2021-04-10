const jwt = require('jsonwebtoken');
const { prototype } = require('node:events');

function loginToken(payload) {
    const token = jwt.sign(payload, process.env.SECRET)
    console.log(token);
    return token
}

function verifyToken(token) {
    const decoded = jwt.verify(token, process.env.SECRET)
    return decoded
}

module.exports = {
    loginToken,
    verifyToken
}