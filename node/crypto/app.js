const crypto = require('crypto')
const md5Hash = crypto.createHash('md5')
let test = 'password'
md5Hash.update(test)
let d = md5Hash.digest('hex')
console.log(d)
