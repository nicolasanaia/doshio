import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import { useExpressServer } from 'routing-controllers';

import { NODE_ENV, PORT, ORIGIN, CREDENTIALS } from './config';

export default class App {
    public app: express.Application;
    public env: string;
    public port: string | number;
  
    constructor(controllers: Function[]) {
        this.app = express();
        this.env = NODE_ENV || 'development';
        this.port = PORT || 3000;
    
        this.initializeMiddlewares();
        this.initializeRoutes(controllers);
    }

    public listen() {
        this.app.listen(this.port, async () => {
            console.log('==============================================');
            console.log(`🚀 ------------ ENV ${this.env} ----------- 🚀`);
            console.log(`🚀 --------- RUNNING ON PORT ${this.port} --------- 🚀`);
            console.log('==============================================');
        });
    }

    public getServer() {
        return this.app;
    }

    private initializeMiddlewares() {
        this.app.use(hpp());
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private initializeRoutes(controllers: Function[]) {
        useExpressServer(this.app, {
            cors: {
                origin: ORIGIN,
                credentials: CREDENTIALS,
            },
            controllers: controllers,
            defaultErrorHandler: false,
          });

          
    }
}
