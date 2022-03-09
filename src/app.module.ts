import { EmployeesService } from './employees/service/employees.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesModule } from './employees/employees.module';
import { EmployeesController } from './employees/employees.controller';
import { VehicleController } from './employees/vehicle.controller';

@Module({
  imports: [
    EmployeesModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
  ],
  // controllers: [EmployeesController, VehicleController],
  providers: [],
})
export class AppModule {}
