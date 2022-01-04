import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class validateCustomerMiddlware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Inside the middleware');
        next();
    }
}
