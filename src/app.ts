import express from "express";
import { router } from "./router";

export class App {
  private server: express.Application;

  constructor() {
    this.server = express();
    this.server.use(express.json());
    this.server.use(router);
  }
  public getServer(): express.Application {
    return this.server;
  }
}
