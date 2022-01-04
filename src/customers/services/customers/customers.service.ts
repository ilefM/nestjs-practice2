import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dto/CreateCustomer.dto';
import { Customer } from 'src/customers/types/customer';

@Injectable()
export class CustomersService {
    private customers: Customer[] = [
        {
            id: 1,
            email: 'yo@gmail.com',
            name: 'yo',
        },
        {
            id: 2,
            email: 'yo2@gmail.com',
            name: 'yoyo',
        },
        {
            id: 3,
            email: 'yo3@gmail.com',
            name: 'yoyoyo',
        },
    ];

    findCustomerById(id: number) {
        return this.customers.find((user) => user.id === id);
    }

    createCustomer(payload: CreateCustomerDto) {
        this.customers.push(payload);
    }

    getCustomers() {
        return this.customers;
    }
}
