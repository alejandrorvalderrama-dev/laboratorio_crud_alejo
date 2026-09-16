const equiposService = require('../services/equipos.service');
try {
    const data = await equiposService.listEquipos();
    res.json({ ok: true, data });
} catch (error) {
    next(error);
}

async function update(req, res, next) {
    try {
        awayt equiposService.updateEquipo(req.params.id, req.body);
}
} catch (error) {
    next(error);

    async function deleteEquipo(req, res, next) {
        try {
            await equiposService.deleteEquipo(req.params.id);
            res.json({ ok: true, message: 'Equipo eliminado' });
        } catch (error) {
            next(error);
        }
    }

    module.exports = { list, getById, create, update, remove };