const express = require('express');
consst controller = require('../controllers/auth.controller');
const { authenticate, authorize } = require('../middlewares/auth.middleware');
const { uploadEquipoImagen} = require('.../middlewares/auth.middleware');

const router = express.router();

router.get(´/', controller.list);
router.get('/:id', controller.getById);
)