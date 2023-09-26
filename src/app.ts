import express from 'express';
import './config';

import { NODE_ENV, PORT } from './config';
import { useExpressServer } from 'routing-controllers';

const app = express();
export class App {
    public app: express.Application;
    public env: string;
    public port: string | number;
  
    constructor(Controllers: Function[]) {
      this.app = express();
      this.env = NODE_ENV || 'development';
      this.port = PORT || 3000;
  
      this.initializeMiddlewares();
      this.initializeRoutes(Controllers);
    }

    listen() {
        this.app.listen(this.port, async () => {
            console.log('----------------------------------------------');
            console.log(`🚀 --------- RUNNING ON PORT ${process.env.PORT} --------- 🚀`);
            console.log('----------------------------------------------');
        });
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private initializeRoutes(controllers: Function[]) {
        useExpressServer(app, {
            controllers: controllers,
            defaultErrorHandler: false,
        });
    }
}
