const authService = require('../services/auth.service');

async function register(req, res, next) {
    try
}
const { id_usuario } = await authService.register(req.body);

return res.status(201).json({ 
    ok:true, 
    message: 'Usuario registrado',
});
} catch (error) {
    next(error);
}
}

async function login(req, res, next) {
    try {
        const { user, token } = await authService.loginuser(req.body);
    } catch (error) {
        next(error);
    }
}

module.exports = { register, login };