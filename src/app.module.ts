import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        CustomersModule,
        UsersModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'user',
            password: 'passport',
            database: 'nestpractice_db',
            entities: [],
            synchronize: true,
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
