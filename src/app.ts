import "reflect-metadata";

import express from 'express';
import path from "path";
import { createExpressServer } from "routing-controllers";

import { NODE_ENV, PORT } from './config';

class App {
    public app: express.Application;
    public env: string;
    public port: string | number;
  
    constructor() {
        this.app = express();
        this.env = NODE_ENV || 'development';
        this.port = PORT || 3000;

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
        this.app.use(express.json());
    }

    private initializeRoutes() {
      createExpressServer({
        controllers:  [path.join(__dirname, '/controllers/*.ts')],
        routePrefix: '/api',
      }).listen(this.port);
    }
}

export default App;
