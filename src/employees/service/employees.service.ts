import { EmployeeCraeteDto } from '../dto/employeeCreate.dto';
import { EmployeeStatus, EmployeeTier } from '../employee.enum';
import { Employee } from '../employee.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { EmployeeSearchDto } from '../dto/employeeSearch.dto';
import { EmployeeUpdateDto } from '../dto/employeeUpdate.dto';
import { EmployeeRepository } from '../repositories/employee.repository';

@Injectable()
export class EmployeesService {
  constructor(private employeeRepository: EmployeeRepository) {}

  async getAllEmployees() {
    return await this.employeeRepository.findAll();
  }

  async createEmployee(
    employeeCraeteDto: EmployeeCraeteDto,
  ): Promise<Employee> {
    const { firstName, lastName, designation, nearestCity, tier } =
      employeeCraeteDto;

    return await this.employeeRepository.create(employeeCraeteDto);
  }

  // employeeSearch(employeeSearchDto: EmployeeSearchDto) {
  //   const { status, name } = employeeSearchDto;
  //   let employees = this.getAllEmployees();

  //   if (status) {
  //     employees = employees.filter((emp) => emp.status === status);
  //   }

  //   if (name) {
  //     employees = employees.filter(
  //       (emp) => emp.firstName.includes(name) || emp.lastName.includes(name),
  //     );
  //   }

  //   return employees;
  // }

  // getEmployeeById(id: string) {
  //   const employees = this.getAllEmployees();

  //   let employee = employees.find((emp) => emp.id === id);
  //   if (!employee) {
  //     throw new NotFoundException(`${id} is not found`);
  //   }
  //   return employee;
  // }

  // updateEmployee({ id, city }: EmployeeUpdateDto) {
  //   let employee = this.getEmployeeById(id);
  //   employee.nearestCity = city;
  // }

  // deleteEmployee(id: string) {
  //   let employees = this.getAllEmployees();

  //   this.employees = employees.filter((emp) => emp.id !== id);
  //   return employees.length === this.employees.length;
  // }
}
