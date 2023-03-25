import 'dotenv/config'
import cors from 'cors'
import express, { Application } from 'express'
import morgan from 'morgan'

import routerProduct from './routes/productRouter'
import { sequelize } from './database/db'

class App {
    private app: Application;
    private port: number | string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middleware();
        this.routes();
        this.dbConnect();
    }

    middleware() {
        this.app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
        this.app.use(express.json());
        this.app.use(morgan('dev'));
    }

    routes() {
        this.app.use('/api/products', routerProduct);
    }

    listen() {
        this.app.listen(this.port, () => console.log(`Server running on port ${this.port}`));
    }

    async dbConnect() {
        try {
            await sequelize.authenticate();
            // await sequelize.sync({force: true});
            console.log(`Base de datos conectada`);
        } catch (error) {
            console.log(error);
            console.log(`Error al conectarse a la base de datos`);
        }
    }
}

const app = new App();

export { app }