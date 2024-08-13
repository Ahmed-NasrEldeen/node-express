const jwt = require("express-jwt");
const secret = process.env.JWT_SECRET;
console.log(secret);
const authenticate = jwt({
  secret: secret,
});

module.exports = authenticate;
