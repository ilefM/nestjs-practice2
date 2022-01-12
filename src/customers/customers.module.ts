import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
} from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { validateCustomerAccountMiddlware } from './middlewares/validate-customer-account.middleware';
import { validateCustomerMiddlware } from './middlewares/validate-customer.middleware';
import { CustomersService } from './services/customers/customers.service';

@Module({
    controllers: [CustomersController],
    providers: [CustomersService],
})
export class CustomersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(validateCustomerMiddlware, validateCustomerAccountMiddlware)
            .forRoutes(
                {
                    path: 'customers/search/:id',
                    method: RequestMethod.GET,
                }, // We can add other routes;
                // We can also pass an entire controller
                // forRoutes(TheController)
                // exclude certain routes by .exclude({...})
            );
    }
}
