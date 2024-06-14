// Archivo: routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Obtener todos los usuarios
router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.render('index_user', { users });
});

// Formulario para crear un nuevo usuario
router.get('/new', (req, res) => {
    res.render('new');
});

// Crear un nuevo usuario
router.post('/', async (req, res) => {
    const { fullname, username, password, role } = req.body;
    await User.create({ fullname, username, password, role });
    res.redirect('/users');
});

// Formulario para editar un usuario
router.get('/:id/edit', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.render('edit', { user });
});

// Actualizar un usuario
router.post('/:id', async (req, res) => {
    const { fullname, username, password, role } = req.body;
    await User.update({ fullname, username, password, role }, {
        where: { id: req.params.id }
    });
    res.redirect('/users');
});

// Eliminar un usuario
router.post('/:id/delete', async (req, res) => {
    await User.destroy({
        where: { id: req.params.id }
    });
    res.redirect('/users');
});

module.exports = router;
