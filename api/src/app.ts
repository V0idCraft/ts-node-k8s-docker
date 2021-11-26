import express from "express";
import { useContextMiddleware } from "./context";
import { AppRoutes } from "./routing";

const app: express.Express = express();

// middlewares
app.use(express.json());

app.use(useContextMiddleware);

//routes
AppRoutes.forEach((route) => {
  app.use(`${route.prefix}/${route.path}`, route.routes);
});

export { app };
