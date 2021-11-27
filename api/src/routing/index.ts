import { createOneRoute as createOneRouteUser, findAllUsersRoute} from "../modules/user";
import { IRouting } from "./IRouting";

const routes: IRouting[] = [
  // user routes /api/v1/user
  {
    prefix: "/api/v1",
    path: "user",
    routes: [createOneRouteUser,findAllUsersRoute],
  },
];

export { routes as AppRoutes };
