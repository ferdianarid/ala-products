import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class AppMiddleware implements NestMiddleware {
       use(request: Request, response: Response, next: NextFunction) {
              console.log("Request from Service App")
              next()
       }
}