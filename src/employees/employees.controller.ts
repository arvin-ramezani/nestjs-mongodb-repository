import { EmployeeCraeteDto } from './dto/employeeCreate.dto';
import { EmployeeSearchDto } from './dto/employeeSearch.dto';
import { EmployeeTier } from './employee.enum';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EmployeesService } from './service/employees.service';
import { Employee } from './schemas/employee.schema';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeesService) {}

  @Get()
  async getAllEmployees(
    @Query() param: EmployeeSearchDto,
  ): Promise<Employee[]> {
    return await this.employeeService.getAllEmployees();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createEmployee(@Body() employeeCreateDto: EmployeeCraeteDto) {
    return await this.employeeService.createEmployee(employeeCreateDto);
  }

  // @Get('/id')
  // getEmployeeById(@Param('id') id: string) {
  //   return this.employeeService.getEmployeeById(id);
  // }

  // @Put(':id/city')
  // updateEmployee(@Param('id') id: string, @Body('city') city: string) {
  //   return this.employeeService.updateEmployee({ id, city });
  // }

  // @Delete(':id')
  // @HttpCode(204)
  // deleteEmployee(@Param('id') id: string) {
  //   if (!this.employeeService.deleteEmployee(id)) {
  //     throw new NotFoundException('Employee does not exist !');
  //   }
  //   return;
  // }
}
