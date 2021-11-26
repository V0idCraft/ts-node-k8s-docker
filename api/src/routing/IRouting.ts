import { Router } from "express";

export interface IRouting {
  prefix: string;
  path: string;
  routes: Router[];
}
