import { createOneRoute as createOneRouteUser } from "../modules/user";
import { IRouting } from "./IRouting";

const routes: IRouting[] = [
  // user routes /api/v1/user
  {
    prefix: "/api/v1",
    path: "user",
    routes: [createOneRouteUser],
  },
];

export { routes as AppRoutes };
