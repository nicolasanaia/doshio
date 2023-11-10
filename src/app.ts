import "reflect-metadata";

import express from 'express';
import path from "path";
import cors from "cors";
import { useExpressServer } from "routing-controllers";

import { CREDENTIALS, NODE_ENV, ORIGIN, PORT } from './config';

class App {
    public app: express.Application;
    public env: string;
    public port: string | number;
    public controllers: string[];
  
    constructor() {
        this.app = express();
        this.env = NODE_ENV || 'development';
        this.port = PORT || 3000;
        this.controllers = [path.join(__dirname, '/controllers/*')];

        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    public listen() {
        this.app.listen(this.port, async () => {
            console.log('==============================================');
            console.log(`🚀 ------------ ENV ${this.env} ----------- 🚀`);
            console.log(`🚀 --------- RUNNING ON PORT ${this.port} --------- 🚀`);
            console.log('==============================================');
        });
    }

    private initializeMiddlewares() {        
        this.app.use(cors());
        this.app.use(express.json());
    }

    private initializeRoutes() {
        useExpressServer(this.app, {
            cors: {
                origin: ORIGIN,
                credentials: CREDENTIALS,
            },
            controllers: this.controllers,
            defaultErrorHandler: false,
            routePrefix: '/api',
            classTransformer: true,
        });
    }
}

export default App;
