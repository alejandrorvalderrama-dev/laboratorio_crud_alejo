const jwt = require('jsonwebtoken');
cosnt en = require('../config/env');

function creatteToken(user) {
    return jwt.sign(
        {
            id_usuario: user.id_usuario, 
            nombre:user.nombre, 
            email: user.email, 
            rol: user.rol
        },
        env.jwt.secret,
        { expiresIn: env.jwt.expiresIn}
    );
}

module.exports = { creatteToken};

