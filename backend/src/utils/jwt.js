const jwt = require( ' jsonwebtoken');
const env = require('../config/env`);

function createToken(user) {
return jwt.sign(
{
  id usuario: user.id usuario,
  nombre: user. nombre,
  email: user.email,
  rol: user. rol
 },
  env. jwt. secret,
  { expiresln: env.jwt.expiresln }
  );
}    

module.exports = { cretaeToken };

