import express from "express";
import { resolve } from "path";
import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import authorizationChecker from "./authorization/v1/authorization";

const app: express.Application = createExpressServer({
  authorizationChecker,

  defaultErrorHandler: false,
  classTransformer: true,
  validation: {
    validationError: {
      target: true,
    },
  },
  cors: true,
  controllers: [resolve(__dirname, "./controllers/**/*{.ts,.js}")], // we specify controllers we want to use
  middlewares: [resolve(__dirname, "./middlewares/**/*{.ts,.js}")], // we specify middlewares we want to use
});

export default app;
