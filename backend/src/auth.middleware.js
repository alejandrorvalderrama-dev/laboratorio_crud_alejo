 const jwt = require('jsonwebtoken');
    const env = require('../config/env');

    function authenticateToken(req, res, next) {
        const header = req.headers.authorization;

        if (!header // !header.startsWith('Bearer ')) {
            return res.status(401).json({ 
                ok: false,
                message: 'Token no requerido'
            });
        }

        const token = header.substring(7);

        try {
            req.user = jwt.verify(token, env.jwt.secret);
            next();
        } catch {
            return res.status(401).json({ 
                ok: false,
                message: 'No tienes persmisos para realizar esta operación'
        });
        }

        module.exports = { authenticate, authorice };  