import { App } from "./app";
import { RecommendationsController } from "./controllers/recommendations";

const app = new App([RecommendationsController]);
app.listen();