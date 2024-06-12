
import express from 'express';
import routes from './routes';

import './database'

class App {
    constructor() {
        this.app = express(); // Cria uma instância do Express

        this.middlewares(); // Configura os middlewares
        this.routes(); // Configura as rotas
    }

    middlewares() {
        // Adiciona middleware para processar JSON
        this.app.use(express.json());
    }

    routes() {
        // Adiciona as rotas definidas no arquivo 'routes.js'
        this.app.use(routes);
    }
}

// Exporta a instância da aplicação
export default  new App().app;
