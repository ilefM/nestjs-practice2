import { Type } from 'class-transformer';
import {
    IsEmail,
    IsNotEmpty,
    IsNotEmptyObject,
    IsNumberString,
    ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from './CreateAddress.dto';

export class CreateCustomerDto {
    @IsNumberString() // Validations
    @IsNotEmpty()
    id: number;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    name: string;

    @ValidateNested() // Will validate the fields of the sub dto
    @Type(() => CreateAddressDto)
    @IsNotEmptyObject()
    address: CreateAddressDto;
}
