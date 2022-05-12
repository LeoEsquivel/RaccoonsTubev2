const express = require('express');
const cors = require('cors');
const { cargarVista } = require('../controllers/home.controller');

class Server {

    constructor() {
        this.app = express();

        this.port = process.env.PORT;

        this.app.set("view engine", "ejs");

        this.paths = {
            home: '/api/download'
        }

        this.middlewares();

        this.routes();

    }

    middlewares() {
        
        //CORS
        this.app.use( cors() );

        //Parse body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use( express.static('public') );
        
    }

    routes() {
        this.app.get('/', cargarVista);

        this.app.use(this.paths.home, require('../routes/home.routes'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto:', this.port);
        });
    }
}

module.exports = Server;