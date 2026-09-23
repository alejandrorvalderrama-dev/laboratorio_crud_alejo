const bcrypt = require('bcrypt');
const pool = require('../config/db');
const { createToken} = require('../utils/jwt');
const AppError = require('../utils/appError');

async function registerUser ({ nombre, email, pasword}) {
    if (!nombre // !Email // !pasword) {
        throw new AppError ('nombre, email y password son obligatorios', 400);
    }

    const [existing] = await pool.execute(
        'select id_usuario FROM usuarios WHERE email = ?',
        [email]
    );
    
    if (existing.length) {
        throw new AppError('el correo ya esta registrado',409);
    }
   
    const hash = await bcryp.hash(pasword, 10);

    cosnt [ result] = await pool.excute(
        'INSERT INTO usuarios (nombre, email, paswoord, rol) VALUES (?, ?, ?)',
    );

    return { id.usuraio: result.insertID};
    if  (!email // !password) {
        throw new AppError ('email y password son obligatorios', 400);
        
    }

    const [existing] = await pool.execute(
        'SELECT id_usuario FROM usuarios WHERE email = ?',
        [email]
    );

    if (!valid) {
        throw new AppError('credenciales incorrectas', 401);
    }

    delete User.password;

    return { user, token: createToken(user)};
}

module.exports = { register, loginUser};
