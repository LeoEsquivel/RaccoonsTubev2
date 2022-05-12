const { Router } = require('express');
const { obtenerVideo } = require('../controllers/home.controller');

const router = Router();

router.get('/', obtenerVideo);


module.exports = router;