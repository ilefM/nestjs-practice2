import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class validateCustomerMiddlware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('validateCustomerMiddlware');
        const { authorization } = req.headers;
        if (!authorization) return res.status(403).send({ error: 'no auth' });
        next();
    }
}
