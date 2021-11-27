import express from "express";
import { useContextMiddleware } from "./context";
import { AppRoutes } from "./routing";
import cors from "cors"
const app: express.Express = express();

// middlewares
app.set("trust proxy", true);
app.use(express.json());
app.use(cors());
app.use(useContextMiddleware);

//routes
AppRoutes.forEach((route) => {
  app.use(`${route.prefix}/${route.path}`, route.routes);
});

export { app };
