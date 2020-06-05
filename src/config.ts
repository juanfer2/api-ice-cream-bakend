import { config } from "dotenv";
import { resolve } from "path";
import { ENV } from "./constants/environments.constant";

switch (process.env.NODE_ENV) {
  case ENV.LOCAL:
  case ENV.DEVELOPMENT:
  default:
    config({
      path: resolve(__dirname, !process.env.NODE_ENV ? "../.env.example" : "../.env")
    });
    break;
  case ENV.STAGING:
    config({
      path: resolve(__dirname, "./staging.env")
    });
    break;
  case ENV.PRODUCTION:
    config({
      path: resolve(__dirname, "./production.env")
    });
    break;
}