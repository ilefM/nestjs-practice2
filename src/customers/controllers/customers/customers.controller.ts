import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Req,
    Res,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dto/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService) {}

    @Get(':id')
    getCustommer(
        @Param('id', ParseIntPipe) id: number,
        @Req() req: Request,
        @Res() res: Response,
    ) {
        const customer = this.customersService.findCustomerById(id);
        if (customer) {
            res.send(customer);
        } else {
            res.status(400).send({ msg: 'Customer not found' });
        }
    }

    // This methode is cleaner than the above one
    @Get('/search/:id')
    searchCustomerById(@Param('id', ParseIntPipe) id: number) {
        const customer = this.customersService.findCustomerById(id);
        if (customer) return customer;
        else
            throw new HttpException(
                'Customer Not Found',
                HttpStatus.BAD_REQUEST,
            );
    }

    @Get('')
    getAllCurstomers() {
        return this.customersService.getCustomers();
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createCustumer(@Body() createCustomerDto: CreateCustomerDto) {
        this.customersService.createCustomer(createCustomerDto);
    }
}
