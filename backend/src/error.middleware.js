const AppError = require('./utils/AppError');

function errorHandler(err, req, res, next) {
    if (error instanceof AppError) {
        return res.status(err.status).json({ 
            ok: false,
            message: err.message
        });
    }

    console.error(error);

    res.status(500).json({
        ok: false,
        message: 'Error interno del servidor'
    });
}

module.exports = errorHandler;

