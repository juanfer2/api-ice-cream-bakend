import { Response } from "express";
import {
  ExpressErrorMiddlewareInterface,
  Middleware,
} from "routing-controllers";

@Middleware({ type: "after" })
export class ErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {
  error(
    error: any,
    request: any,
    response: Response,
    next: (err?: any) => any
  ) {
    const { message, name, errors = [], httpCode = 500 } = error;
    for (const validation of errors) {
      const { value = "", property = "", constraints = {} } = validation;
    }
    response.status(httpCode).json({
      httpCode,
      message: [message, { value: name }],
      errors,
    });
  }
}
