import { VehicleSchema } from './schemas/vehicle.schema';
import { Vehicle } from './schemas/vehicle.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './service/employees.service';
import { Employee, EmployeeSchema } from './schemas/employee.schema';
import { EmployeeRepository } from './repositories/employee.repository';
import { VehicleRepository } from './repositories/vehicle.repository';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './service/vehicle.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
      { name: Vehicle.name, schema: VehicleSchema },
    ]),
    // MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
  ],
  controllers: [EmployeesController, VehicleController],
  providers: [
    EmployeesService,
    EmployeeRepository,
    VehicleRepository,
    VehicleService,
  ],
})
export class EmployeesModule {}
