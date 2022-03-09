import { EmployeeCraeteDto } from './../dto/employeeCreate.dto';
import { Employee, EmployeeDocument } from './../schemas/employee.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeRepository {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  async create(employeeCreateDto: EmployeeCraeteDto): Promise<Employee> {
    const newEmployee = await this.employeeModel.create(employeeCreateDto);

    return await newEmployee.save();
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeeModel.find().populate('employeeId');
  }
}
