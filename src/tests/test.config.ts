import "../config";
import "../injector";
import "reflect-metadata";
import { resolve } from "path";
import { createExpressServer } from "routing-controllers";

const randomTestPort: number = Math.floor(Math.random() * 1000) + 3000;

export const app = createExpressServer({
  defaultErrorHandler: false,
  classTransformer: true,
  validation: {
    validationError: {
      target: false,
    },
  },
  controllers: [resolve(__dirname, "../controllers/**/*{.ts,.js}")], // we specify controllers we want to use
  middlewares: [resolve(__dirname, "../middlewares/**/*{.ts,.js}")], // we specify middlewares we want to use
}).listen(randomTestPort, () => {});
