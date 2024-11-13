const jswebtoken = require("jsonwebtoken")
const secret = "zysit"
const JWT = {
    generate(value, exprires = '1d') {
        return jswebtoken.sign(value, secret, { expiresIn: exprires })
    },
    verify(token) {
        try {
            return jswebtoken.verify(token, secret);
        } catch (e) {
            return false
        }
    }
}
module.exports = JWT