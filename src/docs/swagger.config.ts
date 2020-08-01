import { resolve } from "path";
import swaggerJsdoc from "swagger-jsdoc";
// import {API_CONFIG} from '../constants/api.constant';

const options = {
  apis: [resolve(__dirname, "./**/*.yml")],

  definition: {
    openapi: "3.0.0",
    info: {
      title: "IceCream API",
      version: "1.0.0",
      description: "IcreCream v1.0.0",
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    servers: [
      {
        url: "localhost:4000",
      },
    ],
  },
};

const specs = swaggerJsdoc(options);
export default specs;
