import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class validateCustomerAccountMiddlware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const { valid } = req.headers;
        console.log('validateCustomerAccountMiddlware');
        if (valid) {
            next();
        } else {
            res.status(401).send({ error: 'account not valid' });
        }
    }
}
